<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Document;
use App\Application\GroupByOwnersService;

class GroupByOwnersController extends Controller
{
     public function getData(Request $request)
    {
        $data = GroupByOwnersService:: getDocumentDetails($request);
        return $data;

    }
}
