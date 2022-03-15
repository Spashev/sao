<?php

namespace App\Http\Controllers;

use App\Models\Catalog\Subnetworks;
use App\Models\Catalog\Settlement;
use App\Models\Services\ServiceProblemCauses;
use App\Models\Services\Services;
use App\Models\Services\ServicePriorities;
use App\Models\Services\ServiceSubnetworkConns;
use App\Models\Services\ServiceSubnetworks;
use App\Models\Administrative\SiteHop;
use App\Models\Administrative\SiteHopParent;
use App\Models\Notification\Notification;
use App\Models\Notification\NotificationTrigger;

use App\User;

use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class CatalogController extends Controller
{

    public function getSubnetworks()
    {
        $list = ServiceSubnetworks::
                select(DB::raw("CONCAT(subnetwork_1,': ',subnetwork_2,': ',subnetwork_3) AS label, network, id"))
                ->orderBy('id', 'desc')->get();
        return response()->json(['list' => $list], 200); 
    }

    public function getProblemCauses(Request $request)
    {
        $list = ServiceProblemCauses::
                select(DB::raw("id, CONCAT(cause_1_name,': ',cause_2_name) AS label"))
                ->orderBy('id', 'desc')->get();

        return response()->json(['list' => $list], 200);
    }

    public function getSettlements()
    {
        $list = Settlement::
                select(DB::raw("id, CONCAT(name_ru,' (',bdd,')') AS label"))
                ->orderBy('id', 'desc')->get();
        return response()->json(['list' => $list], 200);
    }

    public function searchSettlements(Request $request)
    {
        $query = $request['query'];
        $type = $request['type'];
        $sites = $request['site_list'];

        //types:
        // 1 - by query
        // 2 - by sites 

        if(!$type || $type == 1) // null or 1
        {
            $list = Settlement::
                select(DB::raw("id, CONCAT(name_ru,' (',bdd,')') AS label, city_type"))
                ->whereRaw('LOWER(name_ru) like ?', ['%'.$query.'%'])
                ->take(20)->get();
        }
        else
        {
            if($type == 2)
            {
                $list = Settlement::
                    join('adm_sites', 'adm_sites.kato', '=', 'settlements.kato')
                    ->select(DB::raw("settlements.id, CONCAT(settlements.name_ru,' (',settlements.bdd,')') AS label, settlements.city_type"))
                    ->whereIn('adm_sites.id_site', $sites)
                    //->whereRaw('LOWER(name_ru) like ?', ['%'.$query.'%'])
                    ->get();
            }
        }

        return response()->json(['list' => $list], 200);
    }

    public function getServiceSubnetworks()
    {
        $list = ServiceSubnetworkConns::
                select(DB::raw("CONCAT(subnetwork_1,': ',subnetwork_2,': ',subnetwork_3) AS label, network, id"))
                ->orderBy('id', 'desc')->get();
        return response()->json(['list' => $list], 200); 
    }

    public function getServiceProblemCauses(Request $request)
    {
        $list = ServiceProblemCauses::
                select(DB::raw("id, CONCAT(cause_1_name,': ',cause_2_name) AS label"))
                ->orderBy('id', 'desc')->get();

        return response()->json(['list' => $list], 200);
    }
    

    //used for tickets 
    public function getServiceOptions(Request $request)
    {
        $query = $request->get('query');

        $var = new Services();
        $list_arr = $var->getServiceOptions($query);

        return response()->json(['list' => $list_arr], 200);
    }

    public function getServicePriority(Request $request)
    {
        $id_service = $request->get('id_service');
        $id_influence = $request->get('id_influence');
        $id_city_type = $request->get('id_city_type');

        $priority = ServicePriorities::
                select('service_priorities.id_priority')
                ->where('id_service', $id_service)
                ->where('id_influence', $id_influence)
                ->where('id_city_type', $id_city_type)
                ->first();

        return response()->json(['priority' => $priority], 200);
    }

    public function getSiteHopList(Request $request)
    {
        $sql = "select h.*, substring(h.hop_name,6,5) site_id, p.id_site_main_parent, count(hs.slot) cnt 
                from adm_site_hops h 
                left join adm_site_hop_slots hs on hs.ip_first = h.ip_hop 
                left join adm_site_hop_parents p on p.id_site_base = substring(h.hop_name,6,5) 
                where h.ip_hop = hs.ip_first and h.is_active = 1 and p.is_active = 1 
                group by h.id, p.id_site_main_parent";
        $data = DB::select($sql);

        return response()->json(['list' => $data], 200);
    }

    public function getSiteHopDetail(Request $request)
    {
        $type = $request->get('type');
        $id_site = $request->get('id_site');

        $sql2 = "select s.slot slot1, s.ip_first ip1, h.hop_name hop1, s.is_reserved_link rl1, 
                        s2.slot slot2, s.ip_second ip2, h2.hop_name hop2, s2.is_reserved_link rl2 
                from adm_site_hop_slots s 
                left join adm_site_hops h on h.ip_hop = s.ip_first 
                left join adm_site_hop_slots s2 on s2.ip_first = s.ip_second and s2.ip_second = s.ip_first 
                left join adm_site_hops h2 on h2.ip_hop = s2.ip_first 
                where h.hop_name like '%".$id_site."%' and s.ip_base = s.ip_first ";

        $slots = DB::select($sql2);

        if($type == 2)
        {
            $id_site_main = SiteHopParent::
                select("id_site_main_parent")
                ->where('id_site_base', $id_site)
                ->first();

            if($id_site_main) $id_site = $id_site_main->id_site_main_parent;
        }

        $sql = "select * from adm_site_hop_parents p 
                where 
                    ((p.id_site_base = p.id_site_main_parent and p.id_site_parent is null) or 
                    (p.id_site_base != p.id_site_main_parent and p.id_site_parent is not null))
                and p.id_site_main_parent = '".$id_site."' and p.is_active = 1 
                order by p.level_site";
            
        $topology = DB::select($sql);

        $data = array();
        $data['topology'] = $topology;
        $data['slots'] = $slots;

        return response()->json(['list' => $data], 200);
    }

    public function getSiteRootHops(Request $request)
    {
        $sql = "select * from adm_site_hop_parents p 
                where 
                    ((p.id_site_base = p.id_site_main_parent and p.id_site_parent is null) or 
                    (p.id_site_base != p.id_site_main_parent and p.id_site_parent is not null))
                and p.level_site = 0 and p.is_active = 1 
                order by p.id_site_base";
        $data = DB::select($sql);

        return response()->json(['list' => $data], 200);
    }

    public function getSiteHopParents(Request $request)
    {
        $type = $request->get('type');
        $id_site = $request->get('id_site');

        if($type == 2)
        {
            $id_site_main = SiteHopParent::
                select("id_site_main_parent")
                ->where('id_site_base', $id_site)
                ->first();

            $id_site = $id_site_main->id_site_main_parent;
        }

        $sql = "select * from adm_site_hop_parents p 
                where 
                    ((p.id_site_base = p.id_site_main_parent and p.id_site_parent is null) or 
                    (p.id_site_base != p.id_site_main_parent and p.id_site_parent is not null))
                and p.id_site_main_parent = '".$id_site."' and p.is_active = 1 
                order by p.level_site";
        $data = DB::select($sql);

        return response()->json(['list' => $data], 200);
    }

    public function setRootSiteHop(Request $request)
    {
        $id_site_main = SiteHopParent::
            select("id_site_main_parent")
            ->where('id_site_base', $request['id_site'])
            ->first();
        $result = null;
        if(!$id_site_main)
        {
            $sql = "update adm_site_hops set is_root = 1 where substring(hop_name,6,5) = '".$request['id_site']."'";
            DB::update($sql);

            $result = "raw updated";
        }
        else
        {
            $result = "hop in parent list or incorrect hop name";
        }

        return response()->json(['result' => $result], 200);
    }

    public function getNotificationList(Request $request)
    {
        $notif_list = Notification::with('trigger_info')->get();

        return response()->json(['list' => $notif_list], 200);
    }

    public function getUserList(Request $request)
    {
        $query = $request['query'];

        $user_list = User::
            select('id', 'name AS label')
            ->whereRaw('LOWER(email) like ?', ['%'.$query.'%'])
            ->orderBy('name', 'asc')->get();

        return response()->json(['list' => $user_list], 200);
    }

    public function getUserListActivedDirectory(Request $request)
    {
        $request['email'] = $request['search_user_email'];
        $request['password']  = $request['search_user_pass'];
        $search_email = $request['search_user_email2'];

        $ldap = new \App\Models\LdapModel($request);
        $result = $ldap->getEntrySearch($search_email);

        $user_list = [];

        return response()->json(['list' => $user_list, 'result' => $result], 200);
    }

    public function saveUserListActivedDirectory(Request $request)
    {
        $user_list = $request['user_list'];

        foreach($user_list as $u)
        {
            $u['password'] = password_hash('Test1234!', PASSWORD_DEFAULT);
            
            DB::table('users')->updateOrInsert(['email' => $u['email']], $u);
        }

        return response()->json(['status' => 'ok'], 200);
    }

    public function saveUsersToNotification(Request $request)
    {

        foreach($request['sel_users'] as $u)
        {
            DB::table('notifications')
                ->where('id_user', $u['id'])
                ->where('id_comp', 1)
                ->delete();
            
            foreach($request['sel_region'] as $region)
            {
                $list = NotificationTrigger::
                    select('id')
                    ->where('id_priority', $request['sel_priority']['id'])
                    ->where('id_region', $region['id'])
                    ->where('id_tt_type', $request['sel_tt_type']['id'])
                    ->where('id_network', $request['sel_network_type']['id'])
                    ->where('id_serv_cat', 0)
                    ->first();

                if($list)
                {
                    $status = 'inserted';

                    $trigger_id = $list['id'];
                }
                else 
                {
                    $status = 'not found';

                    $trigger_id = DB::table('notification_triggers')->insertGetId([
                        'id_priority' => $request['sel_priority']['id'],
                        'id_region' => $region['id'],
                        'id_tt_type' => $request['sel_tt_type']['id'],
                        'id_network' => $request['sel_network_type']['id'],
                        'id_serv_cat' => 0,
                        'created_at' => now()
                    ]);
                }

                $res_id = DB::table('notifications')->insert([
                    'id_comp' => 1,
                    'id_trigger' => $trigger_id,
                    'id_user' => $u['id'],
                    'inform_type' => 2,
                    'created_at' => now()
                ]);
            }
        }

        

        return response()->json(['status' => 'ok'], 200);
    }
}
