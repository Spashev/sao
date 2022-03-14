<?php

// use App\Models\AclModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

/**
 * Auth SPA
 */
//Auth::routes();
Route::get('test', 'HomeController@ldap');

Route::get('sendtestsms', 'TroubleTicketController@sendTestSms');

// need correct RN - alarms 
Route::post('putalarms', 'AlarmController@putAlarms');
Route::get('archalarms', 'AlarmArchiveController@toArch');
Route::post('alarms/log/save', 'AlarmLogController@save');

// TN - alarms - insert update cease
Route::post('tn_alarm/save', 'AlarmController@putTnAlarm');


Route::post('login', 'AuthController@login');
Route::post('logout', 'AuthController@logout');
Route::apiResources([
    'service-group' => ServiceGroupController::class,
    'service-influence-conditions' => ServiceInfluenceConditionsController::class,
    'service-influence-conns' => ServiceInfluenceConnsController::class,
    'service-influence-groups' => ServiceInfluenceGroupsController::class,
    'service-problem-causes' => ServiceProblemCausesController::class,   
    'service-problem-conns' => ServiceProblemConnsController::class,
    'service-problem-groups' => ServiceProblemGroupsController::class,
    'services' => ServicesController::class,
    'service-type-problems' => ServiceTypeproblemsController::class,
]);

Route::apiResources([
    'settlements' => SettlementsController::class,
   
]);

Route::apiResources([
    'reference' => ReferenceController::class,
   
]);
Route::post('upload', 'UploadController@upload');

/**
 * Generate Token for device
 */
Route::post('/device/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }
    $user->createToken($request->device_name)->plainTextToken;

    $data = array();

    $data = $user;
    $data['token'] = $user->createToken($request->device_name)->plainTextToken;

    return $data;
});

Route::middleware('auth:sanctum')->group(function () {

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ general ~~~ */

    Route::prefix('general')->group(function () {
        Route::get('get-application', 'GeneralController@getApplication');
    });

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ user-groups ~~~ */

    Route::prefix('user-groups')->group(function () {
        /* Role */
        Route::middleware('action:role-create')->post('create-role', 'UserGroupsController@createRole');
        Route::middleware('action:role-read')->get('get-role', 'UserGroupsController@getRole');
        Route::middleware('action:role-update')->post('edit-role', 'UserGroupsController@editRole');
        Route::middleware('action:role-delete')->delete('delete-role', 'UserGroupsController@deleteRole');
        Route::middleware('action:role-read')->get('check-role-name', 'UserGroupsController@checkRoleName');

        /* Action */
        Route::middleware('action:role-read')->get('get-action', 'UserGroupsController@getAction');

        /* Right */
        Route::middleware('action:role-read')->get('get-right', 'UserGroupsController@getRight');
        Route::middleware('action:role-update')->post('edit-right', 'UserGroupsController@editRight');

        /* User */
        Route::middleware('action:role-read')->get('get-user', 'UserGroupsController@getUser');
        Route::middleware('action:role-update')->post('edit-user', 'UserGroupsController@editUser');

        Route::middleware('action:role-create')->post('create-user', 'UserGroupsController@createUser');
    });

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    Route::prefix('scheme')->group(function (){
        /* Components */
        Route::get('components/', 'SchemeController@getComponents');
        Route::get('components/{id}', 'SchemeController@getComponent');
        Route::post('components/create', 'SchemeController@createComponent');
        Route::post('components/update/{id}', 'SchemeController@updateComponent');
        Route::post('components/{id}', 'SchemeController@destroyComponent');

        /* Statuses */
        Route::get('statuses/{id}', 'SchemeController@getStatuses');
        Route::post('statuses/create', 'SchemeController@createStatus');
        Route::post('statuses/update/{id}', 'SchemeController@updateStatus');
        Route::post('statuses/{id}', 'SchemeController@destroyStatus');

        /* Groups */
        Route::get('user-groups/fields/{id}', 'SchemeController@getGroupFields');
        Route::get('user-groups/{id}', 'SchemeController@getGroups');
        Route::post('user-groups/create', 'SchemeController@createGroup');
        Route::post('user-groups/add-user', 'SchemeController@addUserToGroup');
        Route::post('user-groups/delete-user', 'SchemeController@deleteUserFromGroupField');
        Route::post('user-groups/update/{id}', 'SchemeController@updateGroup');
        Route::post('user-groups/{id}', 'SchemeController@destroyGroup');

        /* User Categories */
        Route::get('user-categories/{id}', 'SchemeController@getUserCategories');
        Route::post('user-categories/create', 'SchemeController@createUserCategory');
        Route::post('user-categories/update/{id}', 'SchemeController@updateUserCategory');
        Route::post('user-categories/{id}', 'SchemeController@destroyUserCategory');

        /* User Fields */
        Route::get('user-fields/{id}', 'SchemeController@getUserFields');
        Route::post('user-fields/create', 'SchemeController@createUserField');
        Route::post('user-fields/update/{id}', 'SchemeController@updateUserField');
        Route::post('user-fields/{id}', 'SchemeController@destroyUserField');

        /* Actions */
        Route::get('actions/{id}', 'SchemeController@getActions');
        Route::post('actions/create', 'SchemeController@createAction');
        Route::post('actions/update/{id}', 'SchemeController@updateAction');
        Route::post('actions/{id}', 'SchemeController@destroyAction');

        /* User Categories */
        Route::get('user-activities/{id}', 'SchemeController@getUserActivities');
        Route::post('user-activities/create', 'SchemeController@createUserActivity');
        Route::post('user-activities/{id}', 'SchemeController@destroyUserActivity');

        Route::get('responsible-activities/{ids}', 'SchemeController@getResponsibleActivities');

        /* Email Categories */
        Route::get('email-activities/{id}', 'SchemeController@getEmailActivities');
        Route::post('email-activities/create', 'SchemeController@createEmailActivity');
        Route::post('email-activities/{id}', 'SchemeController@destroyEmailActivity');

        Route::get('user/search', 'SchemeController@userSearch');
        Route::get('user/search', 'SchemeController@userSearch');

        /* Fields */
        Route::get('fields/{id}', 'SchemeController@getFields');
        Route::post('fields/create', 'SchemeController@createField');
        Route::post('fields/update/{id}', 'SchemeController@updateField');
        Route::post('fields/{id}', 'SchemeController@destroyField');

        /* Fields */
        Route::get('field-list/{id}', 'SchemeController@getFieldList');
        Route::post('field-list/create', 'SchemeController@createFieldList');
        Route::post('field-list/update/{id}', 'SchemeController@updateFieldList');
        Route::post('field-list/{id}', 'SchemeController@destroyFieldList');
    });


    # Get authenticated User
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    # Get all tokens
    Route::get('/tokens', function (Request $request) {
        return $request->user()->tokens;
    });

    # Generate Token
    Route::post('/token', function (Request $request) {
        $user = $request->user();
        $ability = $request->has('abilities') ? $request->input('abilities') : ['*'];

        return ['token' => $user->createToken('token-abilities', $ability)->plainTextToken];
    });

    # Check Token Abilities
    Route::post('/server-update', function (Request $request) {
        $user = $request->user();
        if ($user->tokenCan('server:update')) {

            return "Server Updated";
        }

        return "No action allowed!";
    });

    # Revoke token.
    Route::delete('/token', function (Request $request) {
        $user = $request->user();
        $user->tokens()->whereName($request->input('token_name'))->delete();

        return "Token revoked!";
    });

    # Revoke all tokens
    Route::delete('/tokens', function (Request $request) {
        $user = $request->user();
        $user->tokens->each->delete();

        return "Token revoked!";
    });

    Route::prefix('crud')->group(function(){
        Route::get('get-form', 'CrudController@generateForm');
        Route::get('list', 'CrudController@getList');
        Route::get('{id}', 'CrudController@getCrud');
        Route::post('create', 'CrudController@createCrud');
        Route::post('update-action', 'CrudController@updateAction');
    });

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ trouble ticket ~~~ */

    Route::prefix('troubleticket')->group(function(){
        Route::get('list', 'TroubleTicketController@getList');
        Route::get('menu_list', 'TroubleTicketController@getTicketMenuList');

        Route::get('request_list/search', 'TroubleTicketController@getTicketList');

        Route::get('inform_list/search', 'TroubleTicketController@getInformTicketList');
        Route::get('dashboard_info/search', 'TroubleTicketController@getDashboardTicketInfo');

        Route::get('{id}', 'TroubleTicketController@getTicket');

        Route::post('create', 'TroubleTicketController@createTicket');
        Route::post('update-action', 'TroubleTicketController@updateAction');
        Route::get('updateData/{id}', 'TroubleTicketController@getTicketUpdate');
        Route::post('update/{id}', 'TroubleTicketController@updateTicket');

        Route::get('ticket_services/search', 'TroubleTicketController@getTicketServices');
        Route::get('ticket_cities/search', 'TroubleTicketController@getTicketCities');
        Route::get('ticket_actions/search', 'TroubleTicketController@getTicketActions');

        Route::get('ticket_histories/search', 'TroubleTicketController@getTicketHistory');
        Route::get('ticket_change_histories/search', 'TroubleTicketController@getTicketChangeHistory');

        //Route::get('sub_ticket_actions', 'TroubleTicketController@getSubTicketActions');
        Route::get('ticket_subticket/{id}', 'TroubleTicketController@getTicketSubticket');
        Route::get('ticket_subticket_list/search', 'TroubleTicketController@getTicketSubtickets');
        Route::post('update_subticket_action', 'TroubleTicketController@updateSubticketAction');
        Route::get('ticket_sub_actions/search', 'TroubleTicketController@getTicketSubActions');
        Route::get('ticket_subticket_histories/search', 'TroubleTicketController@getTicketSubticketHistory');
        Route::post('create_subticket', 'TroubleTicketController@createSubTicket'); 

        Route::get('ticket_journals/search', 'TroubleTicketController@getTicketJournals');
        Route::post('save_journal', 'TroubleTicketController@createTicketJournal');

        Route::get('ticket_connected/search', 'TroubleTicketController@getTicketConnected');
        Route::post('save_connected_tickets', 'TroubleTicketController@updateConnectedTickets');
        Route::post('update_unconnected_tickets', 'TroubleTicketController@updateUnconnectedTickets');


        Route::post('ticket_advance_search/search', 'TroubleTicketController@getTicketAdvanceSearchList');
        
        Route::get('ticket_seacrh_by_source/search', 'TroubleTicketController@getTicketSearchBySourceName');

        Route::get('ticket_alarm_list/search', 'TroubleTicketController@getTicketAlarmList');

        Route::post('ticket_get_create_data', 'TroubleTicketController@getTicketCreateData');

        Route::get('send_notification/search', 'TroubleTicketController@sendTicketNotification');

         // TODO if up on top another bottom link not work

        


    });

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ monitoring ~~~ */
    
    Route::prefix('monitoring')->group(function(){
        
        Route::get('alarms/search', 'MonitoringController@getActiveAlarms');
        Route::get('alarms/list_by_subtype', 'MonitoringController@getActiveAlarmBySubType');
        
    });


    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ services ~~~ */

    Route::prefix('service')->group(function () {
        Route::get('list/', 'ServiceController@getServiceGroupListTotal');
        Route::get('influence_list/', 'ServiceController@getServiceInfluenceList');

        Route::post('add_service', 'ServiceController@addService');
        Route::post('add_influence_to_priority', 'ServiceController@addInfluenceToPriority');
    });

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ userSettings ~~~ */

    Route::prefix('user_settings')->group(function () {
        Route::get('main_list/', 'UserSettingsController@getUserSettings');
        Route::get('group_list/', 'UserSettingsController@getUserGroupList');
        Route::post('set_user_region', 'UserSettingsController@setUserToRegions');

        Route::get('get_user_notification/', 'UserSettingsController@getUserNotifications');
        Route::post('set_user_notification', 'UserSettingsController@setUserNotifications');
    });
});

// need correct 
Route::get('alarms/index', 'MonitoringController@index');
Route::get('alarms/group', 'MonitoringController@group');

Route::prefix('core')->group(function(){
    Route::post('transmission_site_hop_merge', 'core\ConfigurationController@mergeTransmissionSiteHop');
    Route::post('transmission_site_hop_list_get', 'core\ConfigurationController@getTransmissionSiteHopList');

    // for syslog alarm  -- not used
    Route::get('transmission_site_hop_ip_first', 'core\ConfigurationController@getTransmissionSiteHopIpFirstList');
    Route::post('transmission_site_hop_set_syslog', 'core\ConfigurationController@updateTransmissionSiteHopSyslog');

    Route::post('transmission_site_hop_slot_merge', 'core\ConfigurationController@mergeTransmissionSiteHopSlot');

    //for draw topology 
    Route::get('transmission_site_tp_get_root_list', 'core\ConfigurationController@getTransmissionSiteHopRootList');
    Route::get('transmission_site_tp_get_slot_list', 'core\ConfigurationController@getTransmissionSiteHopSlotList');
    Route::post('transmission_site_tp_insert', 'core\ConfigurationController@updateTransmissionSiteHopTopology');
    // old
    Route::get('transmission_site_draw_topology', 'core\ConfigurationController@drawTransmissionTopology');

    Route::get('create_ticket_by_alarm', 'core\FaultController@createTicketTrigger');
    
    Route::get('test', 'core\ConfigurationController@getTest');

    Route::get('trouble_ticket_set_need_inform', 'core\TroubleTicketController@setNeedInformStatus');
    Route::get('trouble_ticket_send_notification', 'core\TroubleTicketController@sendNotificationTroubleTicket');
    Route::get('trouble_ticket_send_notification_closed', 'core\TroubleTicketController@sendNotificationTroubleTicketClosed');

    Route::post('create_ticket_by_data', 'core\FaultController@createTicketByData'); 
});

Route::prefix('catalog')->group(function(){
    Route::get('subnetworks_list', 'CatalogController@getSubnetworks');
    Route::get('settlements_list', 'CatalogController@getSettlements');
    Route::get('settlement/search', 'CatalogController@searchSettlements');
    Route::post('settlement/search_by_sites', 'CatalogController@searchSettlements');
    Route::get('problem_cause_list', 'CatalogController@getProblemCauses');
    Route::get('service_options', 'CatalogController@getServiceOptions');
    Route::get('service_priority/search', 'CatalogController@getServicePriority');

    Route::get('site_hop_list/search', 'CatalogController@getSiteHopList');
    Route::get('site_hop_detail/search', 'CatalogController@getSiteHopDetail');
    Route::get('site_hop_root_list/search', 'CatalogController@getSiteRootHops');
    Route::get('site_hop_topology/search', 'CatalogController@getSiteHopParents');
    Route::post('site_hop_set_root', 'CatalogController@setRootSiteHop');

    Route::get('notification_list/search', 'CatalogController@getNotificationList');
    Route::get('user_list/search', 'CatalogController@getUserList');
    Route::post('search_user_ad', 'CatalogController@getUserListActivedDirectory');
    Route::post('save_user_from_ad', 'CatalogController@saveUserListActivedDirectory');
    Route::post('save_users_to_notification', 'CatalogController@saveUsersToNotification');

});