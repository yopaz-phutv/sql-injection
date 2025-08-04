<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function create()
    {
        return session('auth') ? redirect(route('lookup')) : Inertia::render('Login');
    }

    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');

        $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
        $user = DB::selectOne($sql);

        // $user = DB::table('users')
        //     ->where('username', $username)
        //     ->where('password', $password)
        //     ->first();

        if ($user) {
            session([
                'auth' => true,
                'id' => $user->id,
                'username' => $user->username,
            ]);

            return response()->json(['status' => 'success']);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid credentials',
            ], 422);
        }
    }

    public function logout()
    {
        session()->flush();

        return response()->json(['status' => 'logged out']);
    }
}
