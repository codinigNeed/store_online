<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->date('requireddate');
            $table->string('status');
            $table->text('description');
            $table->double('total');
            $table->unsignedBigInteger('clientId');
            $table->foreign('clientId')->references('id')->on('clients');
            $table->unsignedBigInteger('employeeId');
            $table->foreign('employeeId')->references('id')->on('employees');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
