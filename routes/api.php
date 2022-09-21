<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\userController;
use App\Http\Controllers\salaryController;
use App\Models\salary;
use Laravel\Sanctum\Sanctum; 


//protected routs
// Route::group(['middleware' => 'auth:sanctum'], function(){

    //user logout rout
    Route::post("user/logout",[userController::class ,"logout"]);
    //view all  user 
    Route::get("viewusers",[userController::class ,"index"]);

    /////////////////////
    ////// salary
    ////////////////////

    //view all employe salary
    Route::get("user/employsalary",[salaryController::class, "show"]);
    
    //add employe salary
    Route::post("user/add_salary",[salaryController::class, "add_salary"]);
    
    //view employe salary
    Route::post("user/viewsalary/{id}",[salaryController::class, "view_salary"]);
    
    //update employe salary
    Route::put("user/updatesalary/{id}",[salaryController::class, "update_salary"]);
 
    //delate employe salary recode
    Route::post("user/delatesalary/{id}",[salaryController::class, "delate_salary"]);

// });
 

//public routs
//user ragistration rout
Route::post("user/ragister",[userController::class ,"ragister"]);

//user login 
Route::post("user/login",[userController::class ,"login"]);
