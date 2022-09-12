<?php

namespace App\Application;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Document;

class GroupByOwnersService
{
     public static function getDocumentDetails(Request $request)
    {
        $companies = Company::all();
        $sampleArray = [];
        foreach ($companies as $key => $element) {
            $documents = Document::where('company_id', '=', $element['id'])->pluck('document_name');
            $data[] = [$element['company_name'] => $documents];
        }
        return $data;

    }
}
