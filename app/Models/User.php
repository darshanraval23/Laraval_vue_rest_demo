<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\salary;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public $tabel = 'users';


    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'role_as',
        'gender',
        'password',
    ];
    public function usertable()
    {
        return $this->morphTo();
    }
   
    
}
