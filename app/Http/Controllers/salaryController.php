<?php

namespace App\Http\Controllers;

use App\Models\salary;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
// use Validator;


class salaryController extends Controller
{
    /**
     * show all Employee salary.
     * perams 
     */
    public function show()
    {
        $employee_details = DB::table('users')
            ->select('users.first_name', 'users.last_name', 'users.email', 'salary.*')
            ->join('salary', 'salary.user_id', '=', 'users.id')
            ->get()->toJson();
        // $hedders = [
        //     'Authorization'=>"Bearer 15|afodZFMMFEiSXETwez7CJyhUXDNm9Z3N22wOsQL7"
        //     // 'Accept' => 'application/json'
        // ];
        // $article = salary::find(1)->UserTabel()
        //                 // ->where('id','1')    
        //                 ->get()->tojson();
        // ];

        return response($employee_details, 200);
    }

     /**
     * view Employee salary.
     * perams user id
     */
    public function view_salary($id)
    {
        $employee_details =  salary::all()->where('user_id', $id);
        if (!$employee_details->isEmpty()) {
            return response($employee_details, 200);
        } else {
            return response([
                'massage' => 'Recde could not be found!'
            ], 201);
        }
    }

    /**
     * update Employee salary.
     * perms Employee id
     */
    public function update_salary($id)
    {
        return 'hh';
    }
    /**
     * delate Employee salary recode.
     * perms Employee id
     */
    public function delate_salary($id)
    {
        return 'hh';
    }

    /**
     * add Employee salary.
     * perms Employee data
     */
    public function add_salary(Request $request)
    {
        $validate = Validator::make(
            $request->all(),
            [
                "user_id" => "required",
                "total_leaves_of_emp" => "required|max:10",
                "calculated_salary" => "required",
                "total_holiday" => "required",
                "working_day" => "required|gt:20",
                "emp_bonus" => "required",
                "emp_paybal_salary" => "required"
            ]
        );
        if ($validate->fails()) {
            return response([$validate->errors()], 404);
        }
        $ldate =  Carbon::now()->toDateString();
        // return $ldate;
        //  if(salary::all()->where('created_on',$ldate)){
        //     return response(salary::all()->where('created_on',$ldate), 404);
        // }
        $salary_obj = new salary;
        $salary_obj->user_id = $request->user_id;
        $salary_obj->total_leaves_of_emp = $request->total_leaves_of_emp;
        $salary_obj->calculated_salary = $request->calculated_salary;
        $salary_obj->total_holiday = $request->total_holiday;
        $salary_obj->working_day = $request->working_day;
        $salary_obj->emp_bonus = $request->emp_bonus;
        $salary_obj->emp_paybal_salary = $request->emp_paybal_salary;
        $salary_obj->save();

        return response([
            'massage' => 'Employee salary has been added'
        ], 201);
    }
}
