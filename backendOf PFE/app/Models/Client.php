<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = ['firstname', 'lastname', 'email', 'adresse','adresse2', 'genre', 'contry', 'city', 'phone'];

    public function orders()
    {
        return $this->hasMany(Order::class, 'customerId');
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class, 'custemerId');
    }
}
