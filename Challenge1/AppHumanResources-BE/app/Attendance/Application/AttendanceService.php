<?php

namespace App\Attendance\Application;

use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use App\Imports\AttendanceImport;
use App\Models\Attendance\Domain\Attendance;


class AttendanceService{
    public static function uploadCSV(Request $request){
        Excel::import(new AttendanceImport, $request->file);

        return('Excel Data Imported Successfully');
    }

}
