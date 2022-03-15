<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDataTestAlarms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        /*
        $table->unsignedBigInteger('id_vendor')->nullable();
        $table->unsignedBigInteger('id_subtype')->nullable();//->index();
        $table->unsignedBigInteger('id_region')->nullable();//->index();
        $table->unsignedBigInteger('id_severity')->nullable();
        $table->unsignedBigInteger('id_severity_vendor')->nullable();
        $table->unsignedBigInteger('fault_code')->nullable();
        $table->string('technology', 256);
        $table->string('vendor', 256);
        $table->string('network', 256);
        $table->string('network_element', 256);
        $table->string('source_element', 256);
        $table->string('source_type', 256);
        $table->string('source_name', 256);
        $table->string('fault_name', 512);
        $table->string('fault_text_1', 4000)->nullable();
        $table->string('fault_text_2', 4000)->nullable();
        */
        
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'2G','Ericsson','Telco','RN','ALMA_BSC_2','SITE','01234TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'2G','Ericsson','Telco','RN','ALMA_BSC_1','SITE','04334TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'2G','Ericsson','Telco','RN','ALMA_BSC_3','SITE','06334TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'2G','Ericsson','Telco','RN','ALMA_BSC_4','SITE','02134TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'2G','Ericsson','Telco','RN','ALMA_BSC_5','SITE','04134TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'2G','Ericsson','Telco','RN','ALMA_BSC_6','SITE','02234TEST123','POWER FAILURE','TEST123','TEST23211')");

        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'3G','Ericsson','Telco','RN','ALMA_BSC_2','SITE','01234TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'3G','Ericsson','Telco','RN','ALMA_BSC_1','SITE','04334TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'3G','Ericsson','Telco','RN','ALMA_BSC_3','SITE','06334TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'3G','Ericsson','Telco','RN','ALMA_BSC_4','SITE','02134TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'3G','Ericsson','Telco','RN','ALMA_BSC_5','SITE','04134TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'3G','Ericsson','Telco','RN','ALMA_BSC_6','SITE','02234TEST123','POWER FAILURE','TEST123','TEST23211')");

        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'4G','Ericsson','Telco','RN','ALMA_BSC_2','SITE','ERBS_01234TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'4G','Ericsson','Telco','RN','ALMA_BSC_1','SITE','ERBS_04334TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'4G','Ericsson','Telco','RN','ALMA_BSC_3','SITE','ERBS_06334TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'4G','Ericsson','Telco','RN','ALMA_BSC_4','SITE','ERBS_02134TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'4G','Ericsson','Telco','RN','ALMA_BSC_5','SITE','ERBS_04134TEST123','POWER FAILURE','TEST123','TEST23211')");
        DB::statement("insert into mon_alarms(id_vendor,id_subtype,id_region,id_severity,id_severity_vendor,fault_code,technology,vendor,network,network_element,source_element,source_type,source_name,fault_name,fault_text_1,fault_text_2)  
        values(1,10,1,2,2,21313,'4G','Ericsson','Telco','RN','ALMA_BSC_6','SITE','ERBS_02234TEST123','POWER FAILURE','TEST123','TEST23211')");



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
