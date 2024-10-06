<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        // Validate incoming request
        $validatedData = $request->validate([
            'produitname' => 'required|string|max:255',
            'inscription' => 'string',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            'instock' => 'required|boolean',
            'imag' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'categorie_id' => 'required|integer',
        ]);

        // Handle file upload
        if ($request->hasFile('imag')) {
            $path = $request->file('imag')->store('images', 'public');
            $validatedData['imag'] = $path;
        }

        $product = Product::create($validatedData);
        return response()->json($product, 201);
    }

    public function show(Product $product)
    {
        return response()->json($product);
    }

    public function update(Request $request, Product $product)
    {
        // Validate incoming request
        $validatedData = $request->validate([
            'produitname' => 'required|string|max:255',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            'instock' => 'required|boolean',
            'imag' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'categorie_id' => 'required|integer',
        ]);

        // Handle file upload
        if ($request->hasFile('imag')) {
            // Delete old image if exists
            if ($product->imag) {
                Storage::disk('public')->delete($product->imag);
            }
            $path = $request->file('imag')->store('images', 'public');
            $validatedData['imag'] = $path;
        }

        $product->update($validatedData);
        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        // Delete image file if exists
        if ($product->imag) {
            Storage::disk('public')->delete($product->imag);
        }
        
        $product->delete();
        return response()->noContent();
    }
}
