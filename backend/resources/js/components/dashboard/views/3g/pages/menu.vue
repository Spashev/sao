<template>

    <ul class="nav nav-pills" style="margin-top:10px;">
        <li class="nav-item">
        
        <router-link class="nav-link active"  :to="'/dashboard/3g/summary'">Summary</router-link>
      </li>
      <li class="nav-item">
        
        <router-link class="nav-link active"  :to="'/dashboard/3g/data_gb_dl'"> PS_TRAFFIC_DL_GB</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/3g/data_gb_ul'"> PS_TRAFFIC_UL_GB</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link active"  :to="'/dashboard/3g/mds'"> MDS</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/3g/thrp_ul'"> THR_UL </router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/3g/mcdr'">mcdr</router-link>
      </li>
        <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/3g/voice_erl'"> voice_url</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/3g/rrc_cs_sr'">  rrc_cs_sr</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/3g/rrc_ps_sr'">rrc_ps_sr</router-link>
      </li>
    </ul>
</template>

<style scoped>
ul li{
    margin-right: 10px;
}
</style>