<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class userController extends Controller
{
    /**
     * Home page of User.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //using modale object
        // return User::all();

        //using db
        // $demo2 = DB::table('users')->get()->toJson();
        // return $demo2;

        //using quarybuilder
        $employess = DB::select('SELECT * FROM users');
        // return response()->json([
        //     'status' => 200,
        //     'message' => 'email alrady exist',
        //     'data' => $employess
        // ], 200);
        return response()->json($employess, 200);
    }

    /**
     * Api for user ragistration 
     *
     * @return \Illuminate\Http\Response
     */
    public function ragister(Request $request)
    {
        //   return  json_encode($request->all());
        $validator = Validator::make(
            $request->all(),
            [
                "first_name" => "required",
                "last_name" => "required",
                "email" => "required",
                "role_as" => "required",
                "gender" => "required",
                "password" => "required|min:6",
                "cpassword" => "required|min:6|same:password",
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->errors(), 404);
        }

        if (User::where('email', $request->email)->first()) {
            return response()->json([
                'message' => ['email alrady exist']
             ], 404);
        }
    
        $insert_user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
            'role_as' => $request->role_as,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        // $token = $insert_user->createToken($request->email)->plainTextToken;
        return response(['message' => 'user registred'], 200);
    }

    /**
     * user login api
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        // return response([$request->all()],200);
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 404);
        } else {
            $user = User::where('email', $request->email)->first();
            // return response($user->password);
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json(['message' => ['These credentials do not match our records.']], 404);
            }

            $token = $user->createToken($request->email)->plainTextToken;

            $response = [
                'message' => "login sucsses",
                'user' => $user,
                'token' => ''
            ];
            return response()->json([
                'message' => 'SUCCESS',
                'token' => $token,
            ], 200);
            // return response([
            //     'status'=> 200,
            //     'message'=> "login sucsses",
            //     'token' => $token
            // ], 200);
        }
    }
    /**
     * User logout.
     *delete user tokens
     */
    public function logout(Request $request)
    { 
        // return response($request->bearerToken());
        if ($request->User()) { 
            $request->User()->tokens()->delete();
            return response([
                'status' => '200',
                'message' => 'logout successfully',
                'text'=> $request->user()
            ]);
        } else {
            return response([
                'status' => '404',
                'message' => 'user tokens not macth'
            ]);
        }
    }
}
