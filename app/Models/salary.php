<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class salary extends Model
{
    use HasFactory;
    public $table ='salary';

    public function UserTabel() {
        return $this->hasMany(User::class);
    }
    protected $fillabel =[
        'total_leaves_of_emp','calculated_salary','total_holiday','working_day','emp_bonus','emp_paybal_salary'
    ];

    public $timestamps = false;
    
}