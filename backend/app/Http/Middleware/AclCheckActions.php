<?php
namespace App\Http\Middleware;

use Closure;

class AclCheckActions
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $action)
    {
        $user = $request->user() ?? null;

        /*  */

        if (empty($user)) {
            return response([
                'action' => explode('.', $action),
                'message' => 'Для получения запрашиваемого ответа нужна аутентификация.',
            ], 401);
        }

        /* если админ, то разрешить */

        if ($user->role_id == 1) {
            return $next($request);
        }

        /* получаем id действий из базы */

        $action_array = explode('.', $action);
        $action_id = \DB::table('acl_actions')->select('id')->whereIn('action', $action_array)->get();
        foreach ($action_id as $key => $value) {
            $action_id[$key] = $value->id;
        }

        /* получаем список прав из базы */

        $roles_list = \DB::table('acl_roles')->select('id', 'parent_id')->get()->toArray();
        $role_id = $this->getIdRoleAndParents(3, $roles_list);
        $right_list = \DB::table('acl_rights')
            ->select('role_id', 'action_id', 'sign')
            ->whereIn('role_id', $role_id)
            ->whereIn('action_id', $action_id)
            ->whereNull('deleted_at')->get()->toArray();

        /* формируем массив с флагами для дальнейшей проверки */

        $rights = [];
        foreach ($role_id as $role_item) {
            foreach ($action_id as $action_item) {
                $sign = array_filter($right_list, function ($value) use ($role_item, $action_item) {
                    return $value->role_id == $role_item && $value->action_id == $action_item;
                });
                $sign = array_shift($sign);
                $old_sign = $rights[$action_item] ?? false;
                $rights[$action_item] = is_null($sign) ? $old_sign : boolval($sign->sign);
            }
        }

        /* запрещаем доступ, если хотя бы один флаг будет false */

        foreach ($rights as $value) {
            if ($value == false) {
                return response([
                    'flags' => $rights,
                    'message' => 'У клиента нет прав доступа к содержимому.',
                ], 403);
            }
        }

        return $next($request);
    }

    /**
     * Возвращает массив id роли и всех родителей(если имеется), начиная с первого родителя
     *
     * @param  integer $role_id
     * @param  integer $array_roles
     * @return array
     */
    private function getIdRoleAndParents($role_id, $array_roles)
    {
        $result = array_filter($array_roles, function ($item) use ($role_id) {
            return $item->id == $role_id;
        });
        $result = array_shift($result);
        if (empty($result)) {
            return [];
        }
        if ($result->parent_id > 0) {
            return array_merge($this->getIdRoleAndParents($result->parent_id, $array_roles), [$result->id]);
        }
        return [$result->id];
    }
}
