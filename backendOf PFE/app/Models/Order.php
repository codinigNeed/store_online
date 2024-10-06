<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ['date', 'requireddate', 'status', 'description', 'total', 'clientId', 'employeeId'];

    public function client()
    {
        return $this->belongsTo(Client::class, 'clientId');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employeeId');
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class, 'orderID');
    }
}

