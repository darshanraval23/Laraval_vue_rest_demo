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
        $demo3 = DB::select('SELECT * FROM users');
        return $demo3;
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
            return response(json_encode($validator->errors()));
        }

        if (User::where('email', $request->email)->first()) {
            return response([
                'status' => 409,
                'message' => 'email alrady exist'
            ], 200);
        }
        
        // return response([
        //     'tokan' => $request->input(),
        //     'massage' => 'user ragisted'
        // ], 201);
        $insert_user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
            'role_as' => $request->role_as,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $insert_user->createToken($request->email)->plainTextToken;

        return response([
            'status' => 200,
            'tokan' => $token,
            'message' => 'user registred',
        ], 200);
    }

    /**
     * user login api
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response([$validator->errors()], 404);
        } else {
            $user = User::where('email', $request->email)->first();
            // return response($user->password);
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }

            $token = $user->createToken($request->email)->plainTextToken;

            $response = [
                'message' => "login sucsses",
                'user' => $user,
                'token' => $token
            ];

            return response($response, 201);
        }
    }
    /**
     * User logout.
     *delete user tokens
     */
    public function logout(Request $request)
    {
        if ($request->User()) { 
            $request->User()->tokens()->delete();
            return response([
                'status' => 'success',
                'massage' => 'logout successfully',
                'text'=> $request->user()
            ]);
        } else {
            return response([
                'status' => 'faild',
                'massage' => 'user tokens not macth'
            ]);
        }
    }
}
