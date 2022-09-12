<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    public function location(){
        return $this->hasOne('App\Models\Location');
    }

    public function asset(){
        return $this->hasMany('App\Models\Asset');
    }

    public function companyGroup(){
        return $this->hasMany('App\Models\CompanyGroup');
    }

    public function people(){
        return $this->hasMany('App\Models\People');
    }
}

