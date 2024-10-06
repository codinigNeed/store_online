<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;
    protected $fillable = ['tva', 'total','date', 'namecompany', 'soldeout', 'clientId'];

    public function client()
    {
        return $this->belongsTo(Client::class, 'custemerId');
    }
}
