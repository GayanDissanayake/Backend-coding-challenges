<?php

namespace App\Models\Attendance\Domain;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    public function employee()
    {
        return $this->belongsTo('App\Models\Attendance\Domain\Employee');
    }

    public function shift()
    {
        return $this->belongsTo('App\Models\Attendance\Domain\Shifts');
    }
}
