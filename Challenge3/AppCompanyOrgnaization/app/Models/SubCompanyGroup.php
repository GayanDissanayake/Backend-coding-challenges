<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCompanyGroup extends Model
{
    use HasFactory;

     public function companyGroup(){
        return $this->belongsTo('App\Models\CompanyGroup');
    }
}
