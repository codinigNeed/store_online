<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['produitname','inscription','quantity','qte','price', 'instock', 'imag', 'categorie_id'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'categorie_id');
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class, 'product_id');
    }
}
