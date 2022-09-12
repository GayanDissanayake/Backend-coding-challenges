<?php

namespace App\Http\Controllers;

use App\Attendance\Application\AttendanceService;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    public function fileImport(Request $request){
        $data = AttendanceService:: uploadCSV($request);
        return $data;
    }

}
