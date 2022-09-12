<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class People extends Model
{
    use HasFactory;

    public function manager(){
        return $this->hasMany('App\Models\Manager');
    }

    public function employee(){
        return $this->hasMany('App\Models\Employee');
    }

    public function company(){
        return $this->belongsTo('App\Models\Company');
    }
}
