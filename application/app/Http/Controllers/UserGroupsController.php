<?php

namespace App\Http\Controllers;

use App\Models\AclModel;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserGroupsController extends Controller
{
    /**
     * Добавить новую роль
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает id записи в базе
     */
    public function createRole(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required|max:255',
            'parent_id' => 'numeric|nullable',
        ]);
        $request['parent_id'] = is_null($request['parent_id']) ? 0 : $request['parent_id'];

        // TODO Проверить переданный id
        $userId = $request->user()->id ?? null;

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'request' => $request->all(),
            ], 403);
        }

        if (AclModel::checkRoleName($request['name'], $request['parent_id']) === false) {
            return response()->json([
                'errors' => ['name' => 'Имя не доступно для регистрации.'],
                'request' => $request->all(),
            ], 403);
        }
        return response()->json([
            'id' => AclModel::createRole($userId, $request['name'], $request['description'], $request['parent_id']),
        ], 200);
    }

    /**
     * Запрос данных по ролям
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает массив с данными
     */
    public function getRole(Request $request)
    {
        $id = json_decode($request['id']) ?? null;
        if (isset($id)) {
            $id = is_array($id) ? $id : [$id];
        }
        return response()->json(AclModel::getRole($id), 200);
    }

    /**
     * Изменение записи о роли
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает результат исполнения запроса
     */
    public function editRole(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'id' => 'required|numeric',
            'parent_id' => 'numeric|nullable',
        ]);

        // TODO Проверить переданный id
        $userId = $request->user()->id ?? null;

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'request' => $request->all(),
            ], 403);
        }
        if (AclModel::checkRoleName($request['name'], $request['parent_id']) === false) {
            return response()->json([
                'errors' => ['name' => 'Имя не доступно для регистрации.'],
                'request' => $request->all(),
            ], 403);
        }
        if ($request['id'] === $request['parent_id']) {
            return response()->json([
                'errors' => ['parent_id' => 'Не корректно указано id родительской роли.'],
                'request' => $request->all(),
            ], 403);
        }
        return response()->json(
            AclModel::updateRole($userId, $request['id'], $request['name'], $request['description'], $request['parent_id']
            ), 200);
    }

    /**
     * Мягкое удаление записи о роле
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает результат исполнения запроса
     */
    public function deleteRole(Request $request)
    {
        $validator = \Validator::make($request->all(), ['id' => 'required|numeric']);
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'request' => $request->all(),
            ], 403);
        }

        // TODO Проверить переданный id
        $userId = $request->user()->id ?? null;
        return response()->json(AclModel::deleteRole($userId, $request['id']), 200);
    }

    /**
     * Запрос проверки доступности имени для регистрации
     *
     * @param  mixed $request
     * @return void
     */
    public function checkRoleName(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required|max:255',
            'parent_id' => 'numeric|nullable',
        ]);
        $request['parent_id'] = is_null($request['parent_id']) ? 0 : $request['parent_id'];
        return response()->json(AclModel::checkRoleName($request['name'], $request['parent_id']), 200);
    }

    /**
     * Запрос данных по действиям
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает массив с данными
     */
    public function getAction(Request $request)
    {
        $id = json_decode($request['id']) ?? null;
        if (isset($id)) {
            $id = is_array($id) ? $id : [$id];
        }
        return response()->json(AclModel::getAction($id), 200);
    }

    /**
     * Запрос данных по правам
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает массив с данными
     */
    public function getRight(Request $request)
    {
        $id = json_decode($request['id']) ?? null;
        if (isset($id)) {
            $id = is_array($id) ? $id : [$id];
        }
        return response()->json(AclModel::getRight($id), 200);
    }

    /**
     * Запрос на изменение прав
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает код ошибки
     */
    public function editRight(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'role_id' => 'required',
            'payload' => 'required',
        ]);
        $userId = $request->user()->id ?? null;
        foreach (json_decode($request->payload) as $item) {
            if ($item->sign < 0) {
                AclModel::deleteRight($userId, $request->role_id, $item->action_id);
                continue;
            }
            AclModel::updateRight($userId, $request->role_id, $item->action_id, $item->sign);
        }
        return response()->json(0, 200);
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Users ~~~ */

    /**
     * Запрос данных по пользователям
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает массив с данными
     */
    public function getUser(Request $request)
    {
        $id = json_decode($request['id']) ?? null;
        if (isset($id)) {
            $id = is_array($id) ? $id : [$id];
        }
        return response()->json(AclModel::getUser($id), 200);
    }

    /**
     * Запрос на изменение роли для пользователя
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response  Возвращает код ошибки
     */
    public function editUser(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'id' => 'required|numeric',
            'role_id' => 'required|numeric',
        ]);
        $userId = $request->user()->id ?? null;
        return response()->json(AclModel::updateUser($userId, $request->id, $request->role_id), 200);
    }

    public function createUser(Request $request)
    {
        $user = new User();
        $user->password = Hash::make('Test1234!');
        $user->email = strtolower($request['email']);
        $user->name = $request['name'];
        $user->save();

        return response()->json(AclModel::updateUser($user->id, $user->id, 2), 200);
    }
}
