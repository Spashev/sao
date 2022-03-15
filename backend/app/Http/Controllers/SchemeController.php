<?php

namespace App\Http\Controllers;

use App\Models\Scheme\SchemeAction;
use App\Models\Scheme\SchemeComponent;
use App\Models\Scheme\SchemeEmailActivity;
use App\Models\Scheme\SchemeField;
use App\Models\Scheme\SchemeFieldList;
use App\Models\Scheme\SchemeStatus;
use App\Models\Scheme\SchemeUserActivity;
use App\Models\Scheme\SchemeUserCategory;
use App\Models\Scheme\SchemeUserField;
use App\Models\Scheme\SchemeUserGroup;
use App\Models\Scheme\SchemeUserList;
use App\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class SchemeController extends Controller
{

    public function getComponents()
    {
        $components = SchemeComponent::orderBy('id', 'asc')->get();

        return response()->json([
            "components" => $components
        ], 200);
    }

    public function getComponent($id)
    {
        $component = SchemeComponent::find($id);
        return response()->json([
            "component" => $component,
            "actions" => SchemeAction::where('comp_id', $id)->orderBy('id', 'asc')->get(),
            "statuses" => SchemeStatus::orderBy('id', 'asc')->get()
        ], 200);
    }

    public function createComponent(Request $request)
    {
        $request['comp_name'] = $request['name'];
        $request['comp_desc'] = $request['description'];
        $this->validate(
            $request,
            [
                'comp_name' => 'required|max:255',
                'comp_desc' => 'required|max:4000',
            ],
            [],
            [
                'comp_name' => 'Название',
                'comp_desc' => 'Описание'
            ]
        );

//        $validator = Validator::make($request->all(), [
//            'comp_name' => 'required|max:255',
//            'comp_desc' => 'required|max:4000',
//        ]);
//        if ($validator->fails()) {
//            return response()->json(['errors' => $validator->errors()], 422);
//        }
        $component = SchemeComponent::create($request->only(["comp_name", "comp_desc"]));
        return response()->json([
            "success" => 1,
            "component" => $component
        ], 200);
    }

    public function updateComponent(Request $request, $id)
    {
        $request['comp_name'] = $request['name'];
        $request['comp_desc'] = $request['description'];
        $validateData = $this->validate(
            $request,
            [
                'comp_name' => 'required|max:255',
                'comp_desc' => 'required|max:4000',
            ],
            [],
            [
                'comp_name' => 'Название',
                'comp_desc' => 'Описание'
            ]
        );

        $component = SchemeComponent::findOrFail($id);
        $component->update($validateData);
        return response()->json([
            "success" => 1,
            "component" => $component
        ], 200);
    }

    public function destroyComponent($id)
    {
        $component = SchemeComponent::findOrFail($id);

        try {
            $component->delete();
            return response()->json(['success' => 1], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Компонента! Невозможно удалить Компонент, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }

    function buildTree(array $elements, $parentId = 0)
    {
        $branch = [];

        foreach ($elements as $element) {
            if ($element['par_act_id'] == $parentId) {
                $children = $this->buildTree($elements, $element['id']);
                if ($children) {
                    $element['children'] = $children;
                }
                $branch[] = $element;
            }
        }

        return $branch;
    }

    function rebuildTree(array $elements)
    {
        if (isset($elements[0]['children'])) {
            foreach ($elements[0]['children'] as $element) {
                if (isset($element['par_act_id'])) {
                    $elements[] = $element;
                    $this->rebuildTree($element);
                }
            }
        } else {
            if (isset($elements['children'])) {
                foreach ($elements['children'] as $element) {
                    if (isset($element['par_act_id'])) {
                        $this->rebuildTree($element);
                        $elements[] = $element;
                    }
                }
            }

        }

        return $elements;
    }

    function getNodes($nodes, $result = []){
        for($i = 0; $i < count($nodes); $i++){
            if(isset($nodes[$i]['children'])){
                array_push($result, $nodes[$i]);
            }
            if(!isset($nodes[$i]['children']) || count($nodes[$i]['children']) === 0){
                array_push($result, $nodes[$i]);
            }else{
                $result = $this->getNodes($nodes[$i]['children'], $result);
            }
        }
      return $result;
    }

    public function getActions($id)
    {
        $tree = $this->buildTree(SchemeAction::where('comp_id', $id)->orderBy('id', 'asc')->get()->toArray());
        $nodes = $this->getNodes($tree);

        return response()->json([
            "actions" => $nodes,
        ], 200);
    }

    public function createAction(Request $request)
    {
        $request['act_title'] = $request['name'];
        $request['act_desc'] = $request['description'];
        $this->validate($request, [
            'act_title' => 'required',
            'act_desc' => 'required',
            'comp_id' => 'required',
        ]);
        $action = SchemeAction::create($request->only(["act_title", "act_desc", "comp_id", "status_id", "par_act_id", "back_act_id"]));

        return response()->json([
            "action" => $action
        ], 200);
    }

    public function updateAction(Request $request, $id)
    {
        $request['act_title'] = $request['name'];
        $request['act_desc'] = $request['description'];
        $this->validate($request, [
            'act_title' => 'required',
            'act_desc' => 'required',
            'comp_id' => 'required',
        ]);
        $action = SchemeAction::findOrFail($id);
        $action->update($request->all());
        $tree = $this->buildTree(SchemeAction::where('comp_id', $action->comp_id)->orderBy('id', 'asc')->get()->toArray());
        $nodes = $this->getNodes($tree);
        return response()->json([
            "success" => 1,
            "actions" => $nodes,
            "action" => $action
        ], 200);
    }

    public function destroyAction($id)
    {
        $action = SchemeAction::findOrFail($id);

        try {
            $action->delete();
            return response()->json(['success' => true], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Действия! Невозможно удалить Действие, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }

    public function getStatuses($id)
    {
        return response()->json([
            "statuses" => SchemeStatus::where('comp_id', $id)
                ->orWhere('comp_id', null)
                ->orderBy('id', 'asc')->get()], 200);
    }

    public function createStatus(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255'
        ]);

        $status = SchemeStatus::create($request->only(["name", "comp_id"]));

        return response()->json([
            "success" => true,
            "status" => $status
        ], 200);
    }

    public function updateStatus(Request $request, $id)
    {
        $validateData = $this->validate(
            $request,
            [
                'name' => 'required|max:255'
            ],
            [],
            [
                'name' => 'Статус'
            ]
        );
        $status = SchemeStatus::findOrFail($id);
        $status->update($validateData);
        return response()->json([
            "success" => true,
            "status" => $status
        ], 200);
    }

    public function destroyStatus($id)
    {
        $status = SchemeStatus::findOrFail($id);

        try {
            $status->delete();
            return response()->json(['success' => true], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Статуса! Невозможно удалить Статус, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }


    public function getGroups($id)
    {
        return response()->json([
            "userGroups" => SchemeUserGroup::where('comp_id', $id)->orderBy('id', 'asc')->get(),
        ], 200);
    }

    public function createGroup(Request $request)
    {
        $request['group_name'] = $request['name'];
        $this->validate($request, [
            'group_name' => 'required|max:255',
            'comp_id' => 'required'
        ]);
        $group = SchemeUserGroup::create($request->only(["group_name", "comp_id"]));

        return response()->json([
            "userGroup" => $group
        ], 200);
    }

    public function updateGroup(Request $request, $id)
    {
        $request['group_name'] = $request['name'];

        $validateData = $this->validate(
            $request,
            [
                'group_name' => 'required|max:255'
            ],
            [],
            [
                'name' => 'Группа'
            ]
        );
        $group = SchemeUserGroup::findOrFail($id);
        $group->update($validateData);
        return response()->json([
            "success" => 1,
            "userGroup" => $group
        ], 200);
    }

    public function destroyGroup($id)
    {
        $group = SchemeUserGroup::findOrFail($id);

        try {
            $group->delete();
            return response()->json(['success' => 1], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Группы! Невозможно удалить Группу, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }

    public function getGroupFields($id)
    {
        $groupFields = SchemeUserList::select('scheme_user_lists.field_id', 'scheme_user_fields.field_name')
            ->join('scheme_user_fields', function ($join) {
                $join->on('scheme_user_fields.id', '=', 'scheme_user_lists.field_id');
            })
            ->where('scheme_user_lists.group_id', $id)->groupBy('scheme_user_lists.field_id', 'scheme_user_fields.field_name')->orderBy('field_name', 'asc')->get();

        $fieldsUsers = SchemeUserList::select('scheme_user_lists.field_id', 'scheme_user_lists.is_email', 'scheme_user_lists.is_admin', 'users.id as user_id', 'users.email', 'users.mobile')
            ->join('users', function ($join) {
                $join->on('users.id', '=', 'scheme_user_lists.user_id');
            })
            ->where('scheme_user_lists.group_id', $id)
//            ->whereIn('scheme_user_lists.field_id', $groupFields->pluck('field_id'))
//            ->where('scheme_user_lists.field_id', null)
            ->orderBy('field_id', 'asc')
            ->get();

        $groupFieldsUsers = [];

        if ($groupFields && $fieldsUsers) {
            foreach ($fieldsUsers as &$item) {
                if ($item['field_id'] == null) {
                    $groupFieldsUsers[$id][0]['id'] = 0;
                    $groupFieldsUsers[$id][0]['name'] = 'Basic';

                    $is_email = $item['is_email'] == 1 ? 1 : 0;
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['id'] = $item['user_id'];
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['email'] = $item['email'];
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['mobile'] = $item['mobile'];
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['is_email'] = $is_email;
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['is_admin'] = $item['is_admin'];
                }
            }
        }

        foreach ($groupFields as $field) {
            $groupFieldsUsers[$id][$field['field_id']]['id'] = $field['field_id'];
            $groupFieldsUsers[$id][$field['field_id']]['name'] = $field['field_name'];

            foreach ($fieldsUsers as &$item) {
                if ($field['field_id'] == $item['field_id']) {
                    $is_email = $item['is_email'] ?? 0;
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['id'] = $item['user_id'];
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['email'] = $item['email'];
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['mobile'] = $item['mobile'];
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['is_email'] = $is_email;
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['is_admin'] = $item['is_admin'];
                }
            }
        }
        return response()->json([
            "groupFieldsUsers" => $groupFieldsUsers,
        ], 200);
    }

    public function addUserToGroup(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required',
            'group_id' => 'required',
        ]);
        $userList = SchemeUserList::create($request->only(["user_id", "group_id", "field_id", "is_email", "is_admin"]));

//        return response()->json([
//            "userList" => $userList
//        ], 200);

        $id = $userList->group_id;
        $groupFields = SchemeUserList::select('scheme_user_lists.field_id', 'scheme_user_fields.field_name')
            ->join('scheme_user_fields', function ($join) {
                $join->on('scheme_user_fields.id', '=', 'scheme_user_lists.field_id');
            })
            ->where('scheme_user_lists.group_id', $id)->groupBy('scheme_user_lists.field_id', 'scheme_user_fields.field_name')->orderBy('field_name', 'asc')->get();

        $fieldsUsers = SchemeUserList::select('scheme_user_lists.field_id', 'scheme_user_lists.is_email', 'scheme_user_lists.is_admin', 'users.id as user_id', 'users.email', 'users.mobile')
            ->join('users', function ($join) {
                $join->on('users.id', '=', 'scheme_user_lists.user_id');
            })
            ->where('scheme_user_lists.group_id', $id)
//            ->whereIn('field_id', $groupFields->pluck('field_id'))
//            ->orWhere('field_id', null)
            ->orderBy('field_id', 'asc')
            ->get();

        $groupFieldsUsers = [];

        if ($groupFields && $fieldsUsers) {
            foreach ($fieldsUsers as &$item) {
                if ($item['field_id'] == null) {
                    $groupFieldsUsers[$id][0]['id'] = 0;
                    $groupFieldsUsers[$id][0]['name'] = 'Basic';

                    $is_email = $item['is_email'] ?? 0;
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['id'] = $item['user_id'];
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['email'] = $item['email'];
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['mobile'] = $item['mobile'];
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['is_email'] = $is_email;
                    $groupFieldsUsers[$id][0]['user_list'][$is_email][$item['user_id']]['is_admin'] = $item['is_admin'];
                }
            }
        }


        foreach ($groupFields as $field) {
            $groupFieldsUsers[$id][$field['field_id']]['id'] = $field['field_id'];
            $groupFieldsUsers[$id][$field['field_id']]['name'] = $field['field_name'];

            foreach ($fieldsUsers as &$item) {
                if ($field['field_id'] == $item['field_id']) {
                    $is_email = $item['is_email'] == 1 ? 1 : 0;
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['id'] = $item['user_id'];
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['email'] = $item['email'];
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['mobile'] = $item['mobile'];
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['is_email'] = $is_email;
                    $groupFieldsUsers[$id][$field['field_id']]['user_list'][$is_email][$item['user_id']]['is_admin'] = $item['is_admin'];
                }
            }
        }
        return response()->json([
            "groupFieldsUsers" => $groupFieldsUsers,
        ], 200);
    }

    public function deleteUserFromGroupField(Request $request)
    {
        $user = SchemeUserList::where('group_id', $request->group_id)
            ->where('field_id', $request->field_id ?: null)
            ->where('user_id', $request->user_id)
            ->where('is_email', $request->is_email)->take(1);

        try {
            $user->delete();
            return response()->json(['success' => 1], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Категории Пользователя! Невозможно удалить Категорию Пользователя, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }

    public function getUserCategories($id)
    {
        return response()->json([
            "userCategories" => SchemeUserCategory::where('comp_id', $id)->orderBy('id', 'asc')->get(),
        ], 200);
    }

    public function createUserCategory(Request $request)
    {
        $request['cat_name'] = $request['name'];
        $this->validate($request, [
            'cat_name' => 'required|max:255',
            'comp_id' => 'required'
        ]);
        $user_category = SchemeUserCategory::create($request->only(["cat_name", "comp_id"]));

        return response()->json([
            "userCategory" => $user_category
        ], 200);
    }

    public function updateUserCategory(Request $request, $id)
    {
        $request['cat_name'] = $request['name'];

        $validateData = $this->validate(
            $request,
            [
                'cat_name' => 'required|max:255'
            ],
            [],
            [
                'name' => 'Категория'
            ]
        );
        $user_category = SchemeUserCategory::findOrFail($id);
        $user_category->update($validateData);
        return response()->json([
            "success" => 1,
            "userCategory" => $user_category
        ], 200);
    }

    public function destroyUserCategory($id)
    {
        $user_category = SchemeUserCategory::findOrFail($id);

        try {
            $user_category->delete();
            return response()->json(['success' => 1], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Категории Пользователя! Невозможно удалить Категорию Пользователя, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }

    public function getUserFields($id)
    {
        return response()->json([
            "userFields" => SchemeUserField::where('comp_id', $id)->orderBy('id', 'asc')->get(),
        ], 200);
    }

    public function createUserField(Request $request)
    {
        $request['field_name'] = $request['name'];
        $this->validate($request,
            [
                'field_name' => 'required|max:255',
                'cat_id' => 'required',
                'comp_id' => 'required',
            ],
            [],
            [
                'name' => 'Поля',
                'cat_id' => 'Категория Пользователя',
            ]);
        $user_field = SchemeUserField::create($request->only(["field_name", "comp_id", "cat_id"]));

        return response()->json([
            "userField" => $user_field
        ], 200);
    }

    public function updateUserField(Request $request, $id)
    {
        $request['field_name'] = $request['name'];

        $validateData = $this->validate(
            $request,
            [
                'field_name' => 'required|max:255',
                'cat_id' => 'required',
                'comp_id' => 'required',
            ],
            [],
            [
                'name' => 'Поля',
                'cat_id' => 'Категория Пользователя',
            ]
        );
        $user_field = SchemeUserField::findOrFail($id);
        $user_field->update($validateData);
        return response()->json([
            "success" => 1,
            "userField" => $user_field
        ], 200);
    }

    public function destroyUserField($id)
    {
        $user_field = SchemeUserField::findOrFail($id);

        try {
            $user_field->delete();
            return response()->json(['success' => 1], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Поля Пользователя! Невозможно удалить Поле Пользователя, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }

    public function getUserActivities($id)
    {
        return response()->json([
            "userActivities" => SchemeUserActivity::where('act_id', $id)->orderBy('id', 'asc')->get(),
        ], 200);
    }

    public function getResponsibleActivities($ids)
    {
        $ids = isset($ids) ? json_decode($ids) : array();
        $responsibleActivities = SchemeUserActivity::select('scheme_user_activities.act_id', 'scheme_user_activities.group_id', 'scheme_user_groups.group_name')
            ->join('scheme_user_groups', function ($join) {
                $join->on('scheme_user_groups.id', '=', 'scheme_user_activities.group_id');
            })
            ->where('scheme_user_activities.act_type', 3)->whereIn('scheme_user_activities.act_id', $ids)->get();

        return response()->json([
            "responsibleActivities" => $responsibleActivities
        ], 200);
    }

    public function createUserActivity(Request $request)
    {
        $this->validate($request,
            [
                'act_type' => 'required',
                'cat_id' => 'required',
                'group_id' => 'required',
                'act_id' => 'required',
            ],
            [],
            [
                'cat_id' => 'Категория Пользователя',
            ]);
        $user_activity = SchemeUserActivity::create($request->only(["act_type", "act_id", "cat_id", "group_id", "is_user", "inform_by"]));

        return response()->json([
            "userActivity" => $user_activity
        ], 200);
    }

    public function destroyUserActivity($id)
    {
        $user_activity = SchemeUserActivity::findOrFail($id);

        try {
            $user_activity->delete();
            return response()->json(['success' => 1], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Активити! Невозможно удалить Активити, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }


    public function getEmailActivities($id)
    {
        return response()->json([
            "emailActivities" => SchemeEmailActivity::where('act_id', $id)->orderBy('id', 'asc')->get(),
        ], 200);
    }

    public function createEmailActivity(Request $request)
    {
        $this->validate($request,
            [
                'email' => 'required',
                'act_id' => 'required',
            ],
            [],
            [
                'email' => 'Email',
            ]);
        $email_activity = SchemeEmailActivity::create($request->only(["act_id", "email"]));

        return response()->json([
            "emailActivity" => $email_activity
        ], 200);
    }

    public function destroyEmailActivity($id)
    {
        $email_activity = SchemeEmailActivity::findOrFail($id);

        try {
            $email_activity->delete();
            return response()->json(['success' => 1], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Активити! Невозможно удалить Активити, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }

    public function userSearch(Request $request)
    {
        $query = $request->get('query');

        $users = User::select('id', 'email')->where('email', 'like', '%' . $query . '%')->take(20)->get();

        return response()->json(['items' => $users], 200);
    }

    public function getFields($id)
    {
        return response()->json([
            "fields" => SchemeField::where('comp_id', $id)->orderBy('id', 'asc')->get(),
        ], 200);
    }

    public function createField(Request $request)
    {
        $this->validate($request,
            [
                'field_name' => 'required|max:255',
                'field_label' => 'required|max:255',
                'field_ord' => 'required',
                'field_col' => 'required',
                'field_type' => 'required',
                'query_type' => 'required',
                'comp_id' => 'required',
            ],
            [],
            [
                'field_name' => 'Название',
            ]);
        $field = SchemeField::create($request->only([
            'comp_id',
            'field_label',
            'field_name',
            'field_ord',
            'field_type',
            'query_type',
            'query_select',
            'query_db',
            'query_value2',
            'cond_show',
            'cond_alert',
            'default_vals',
            'is_req',
            'parent',
            'dependent',
            'style_type',
            'field_col',
            'style_class',
            'is_readonly',
            'change_func',
            'max_length',
            'min_length',
            'query_value'
        ]));

        return response()->json([
            "success" => true,
            "field" => $field
        ], 200);
    }

    public function updateField(Request $request, $id)
    {
        $validateData = $this->validate(
            $request,
            [
                'field_name' => 'required|max:255',
                'field_label' => 'required|max:255',
                'field_ord' => 'required',
                'field_col' => 'required',
                'field_type' => 'required',
                'query_type' => 'required',
                'comp_id' => 'required',
            ],
            [],
            [
                'field_name' => 'Название',
            ]
        );
        $field = SchemeField::findOrFail($id);
        $field->update($request->all());
        return response()->json([
            "success" => true,
            "field" => $field
        ], 200);
    }

    public function destroyField($id)
    {
        $field = SchemeField::findOrFail($id);

        try {
            $field->delete();
            return response()->json(['success' => true], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Филда! Невозможно удалить Филд, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }

    public function getFieldList($id)
    {
        return response()->json([
            "fieldLists" => SchemeFieldList::where('act_id', $id)->orderBy('id', 'asc')->get(),
        ], 200);
    }

    public function createFieldList(Request $request)
    {
        $this->validate($request,
            [
                'act_id' => 'required',
                'field_id' => 'required',
                'user_cat_id' => 'required',
                'user_field_id' => 'required',
                'field_ord' => 'required',
                'field_type' => 'required',
                'query_type' => 'required',
            ],
            [],
            [
                'act_id' => 'Действие',
            ]);
        $field = SchemeFieldList::create($request->only([
            'act_id',
            'field_id',
            'user_cat_id',
            'user_field_id',
            'is_basic',
            'field_type',
            'field_ord',
            'query_type',
            'query_select',
            'query_db',
            'query_value',
            'cond_show',
            'cond_alert',
            'default_vals',
            'is_req'
        ]));

        return response()->json([
            "success" => true,
            "fieldList" => $field
        ], 200);
    }

    public function updateFieldList(Request $request, $id)
    {
        $validateData = $this->validate(
            $request,
            [
                'act_id' => 'required',
                'field_id' => 'required',
                'user_cat_id' => 'required',
                'user_field_id' => 'required',
                'field_ord' => 'required',
                'field_type' => 'required',
                'query_type' => 'required',
            ],
            [],
            [
                'act_id' => 'Действие',
            ]
        );
        $field = SchemeFieldList::findOrFail($id);
        $field->update($request->all());
        return response()->json([
            "success" => true,
            "fieldList" => $field
        ], 200);
    }

    public function destroyFieldList($id)
    {
        $field = SchemeFieldList::findOrFail($id);

        try {
            $field->delete();
            return response()->json(['success' => true], 200);
        } catch (QueryException $e) {
            return response()->json([
                'messages' => 'Ошибка при удалении Филда! Невозможно удалить Филд, так как существуют связанные данные!',
                'errors' => $e->errorInfo[2]
            ], 422);
        }
    }
}
