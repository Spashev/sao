<?php
namespace App\Http\Controllers\core;

use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

use App\Models\TroubleTicket\TroubleTicket;

use App\Models\Notification\Notification;

class TroubleTicketController extends Controller
{
    public function getTest()
    {
        return "Yes";
    }

    // set need inform for ticket

    public function setNeedInformStatus()
    {
        $datetime_from = date("Y-m-d H:i:s",strtotime("-20 minutes",strtotime(date('Y-m-d H:i:s'))));

        $sql = "update trouble_tickets set need_inform = 1 
                where id in (
                    select t.id from trouble_tickets t 
                    left join scheme_actions sa on sa.id = t.id_act 
                    where sa.status_id not in (5,7) and t.created_at < '".$datetime_from."' and need_inform = 0 and inform_type = 1 
                )";

        DB::update($sql);

        return "Success";
    }

    // send notification 

    public function sendNotificationTroubleTicket()
    {

        $ticket_list = TroubleTicket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
            ->join('settlements', 'settlements.id', '=', 'trouble_tickets.id_source_settlement')
            ->select('trouble_tickets.*', 'scheme_actions.act_title', 'settlements.id_region as id_region_settlement')
            ->whereNotIn('scheme_actions.status_id', [5,7]) 
            ->where('trouble_tickets.inform_type', 1) 
            ->where('trouble_tickets.need_inform', 1) 
            ->take(5)
            ->orderBy('trouble_tickets.id', 'desc')
            ->get();

        foreach($ticket_list as $ticket)
        {
            $test = new Notification();
            $em_res = $test->SendTtNotification($ticket);

            $sql = "update trouble_tickets set need_inform = 2 
                    where id = ".$ticket->id;

            DB::update($sql);
        }
    }

    public function sendNotificationTroubleTicketClosed()
    {

        $ticket_list = TroubleTicket::
            join('scheme_actions', 'scheme_actions.id', '=', 'trouble_tickets.id_act')
            ->join('settlements', 'settlements.id', '=', 'trouble_tickets.id_source_settlement')
            ->select('trouble_tickets.*', 'scheme_actions.act_title', 'settlements.id_region as id_region_settlement')
            ->where('scheme_actions.status_id', 5) 
            ->where('trouble_tickets.inform_type', 1) 
            ->where('trouble_tickets.need_inform', 2) 
            ->take(5)
            ->orderBy('trouble_tickets.id', 'desc')
            ->get();

        foreach($ticket_list as $ticket)
        {
            $test = new Notification();
            $em_res = $test->SendTtNotification($ticket);

            $sql = "update trouble_tickets set need_inform = 3 
                    where id = ".$ticket->id;

            DB::update($sql);
        }
    }
}

?>