<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyGroup extends Model
{
    use HasFactory;

    public function company(){
        return $this->belongsTo('App\Models\Company');
    }

    public function subCompanyGroup(){
        return $this->hasMany('App\Models\SubCompanyGroup');
    }

    public function employee(){
        return $this->hasMany('App\Models\Employee');
    }
}
