<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = ['empName', 'emplastname', 'title', 'birthdate', 'adress', 'city', 'region', 'job', 'supervisor', 'phone', 'salary'];

    public function orders()
    {
        return $this->hasMany(Order::class, 'employeeId');
    }
}
