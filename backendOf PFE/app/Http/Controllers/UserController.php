<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'username' => 'required',
        ]);

        $user = new User([
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'username' => $request->get('username'),
        ]);

        $user->save();

        return response()->json('User created!');
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'email' => 'required|email|unique:users,email,'.$id,
            'username' => 'required',
        ]);

        if ($request->get('password')) {
            $user->password = Hash::make($request->get('password'));
        }

        $user->email = $request->get('email');
        $user->username = $request->get('username');

        $user->save();

        return response()->json('User updated!');
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json('User deleted!');
    }
}
