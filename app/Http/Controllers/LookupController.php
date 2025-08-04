<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class LookupController extends Controller
{
    public function index()
    {
        return Inertia::render('Lookup');
    }

    public function search(Request $request)
    {
        if (! session('auth')) {
            return response()->json([
                'status' => 'unauthenticated',
                'message' => 'Please log in',
            ], 401);
        }

        $code = $request->query('code');

        $sql = "SELECT * FROM accounts WHERE code = '$code'";
        $results = DB::select($sql);
        // $results = DB::table('accounts')->where('code', $code)->get();

        if (count($results) > 0) {
            return response()->json([
                'status' => 'success',
                'data' => $results,
            ]);
        }

        return response()->json([
            'status' => 'empty',
            'message' => 'No matching records',
        ]);
    }
}
