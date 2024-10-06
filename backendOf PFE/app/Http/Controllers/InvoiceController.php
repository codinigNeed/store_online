<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::all();
        return response()->json($invoices);
    }

    public function store(Request $request)
    {
        return Invoice::create($request->all());
    }

    public function show(Invoice $invoice)
    {
        return $invoice;
    }

    public function update(Request $request, Invoice $invoice)
    {
        $invoice->update($request->all());
        return $invoice;
    }

    public function destroy(Invoice $invoice)
    {
        $invoice->delete();
        return response()->noContent();
    }
}
