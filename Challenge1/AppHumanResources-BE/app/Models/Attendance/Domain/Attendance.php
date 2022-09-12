<?php

namespace App\Models\Attendance\Domain;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\Attendance\Domain\Attendance;
use App\Models\Attendance\Domain\Schedule;


class Attendance extends Model implements WithHeadingRow
{
    use HasFactory;
    protected $fillable = [
        'employee_id',
        'schedule_id',

    ];

}
