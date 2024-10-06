<?php

namespace App\Http\Controllers;

use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
    public function index()
    {
        $orderDetails = OrderDetail::all();
        return response()->json($orderDetails);
    }

    public function store(Request $request)
    {
        return OrderDetail::create($request->all());
    }

    public function show(OrderDetail $orderDetail)
    {
        return $orderDetail;
    }

    public function update(Request $request, OrderDetail $orderDetail)
    {
        $orderDetail->update($request->all());
        return $orderDetail;
    }

    public function destroy(OrderDetail $orderDetail)
    {
        $orderDetail->delete();
        return response()->noContent();
    }
}
