<?php

namespace App\Http\Controllers;

use App\Components\FormDataGenerator;
use App\Models\Crud;
use App\Models\Scheme\SchemeField;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class CrudController extends Controller
{
    CONST COMPONENT_ID = 1;
    CONST START_ACTION = 1;

    public function getList()
    {
        $list = Crud::join('scheme_actions', 'scheme_actions.id', '=', 'cruds.action_id')->select('cruds.*', 'scheme_actions.act_title')->orderBy('cruds.id', 'desc')->get();
        return response()->json(['list' => $list], 200);
    }

    public function getCrud($id)
    {
        $user_id = auth()->user()->id;
        $crud = Crud::join('scheme_actions', 'scheme_actions.id', '=', 'cruds.action_id')->select('cruds.*', 'scheme_actions.act_title', 'scheme_actions.par_act_id')->where('cruds.id', $id)->orderBy('cruds.id', 'desc')->first();

        $actions = DB::select(DB::raw("select t.*, q.group_id, q.group_name, q.user_id, q.act_type, q.field_name 
         from scheme_actions t 
         left join (SELECT a.*, g.group_name, g.id group_id, l.user_id, u.act_type, f.field_name 
           FROM scheme_actions a 
           LEFT JOIN scheme_user_activities u on u.act_id = a.par_act_id
           LEFT JOIN scheme_user_groups g on g.id = u.group_id
           LEFT JOIN scheme_user_lists l on l.group_id = g.id 
           LEFT JOIN scheme_user_fields f on f.id = l.field_id 
           where u.act_type = 3
         ) q on q.id = t.id 
         where t.par_act_id = " . $crud->action_id . " and q.user_id = " . $user_id . " 
            order by t.act_title"));
        return response()->json(['crud' => $crud, "actions" => $actions], 200);
    }

    public function createCrud(Request $request)
    {
        $request['action_id'] = self::START_ACTION;
        $this->validate(
            $request,
            [
                'title' => 'required|max:255',
                'description' => 'required|max:255'
            ],
            [],
            [
                'title' => 'Название',
                'description' => 'Описание'
            ]
        );
        $crud = Crud::create($request->toArray());
        if ($crud) {
            return response()->json(["success" => 1, "crud" => $crud], 200);
        } else {
            throw new Exception("Error in saving data!");
        }
    }

    public function updateAction(Request $request)
    {
        $crud = Crud::findOrFail($request['id']);
        $crud = $crud->update($request->only(['action_id']));
        if ($crud) {
            return response()->json(["success" => 1], 200);
        } else {
            throw new Exception("Error in saving data!");
        }
    }

    public function generateForm()
    {
        $fields = SchemeField::where('comp_id', self::COMPONENT_ID)->orderBy('field_ord', 'asc')->get();
        $schema = [];
        $model = [];
        $array = [];
        foreach ($fields as $field) {
            $array = FormDataGenerator::generateField($field);
            array_push($schema, $array);
            $model[0][$field->field_name] = "";
        }
        return response()->json(["success" => 1, "model" => $model, "schema" => $schema], 200);

    }
}
