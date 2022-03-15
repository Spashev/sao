<template>

    <ul class="nav nav-pills" style="margin-top:10px;">
        <li class="nav-item">
        
        <router-link class="nav-link active"  :to="'/dashboard/4g/summary'">Summary</router-link>
      </li>
      <li class="nav-item">
        
        <router-link class="nav-link active"  :to="'/dashboard/4g/data_gb_dl'"> PS_TRAFFIC_DL_GB</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/4g/data_gb_ul'"> PS_TRAFFIC_UL_GB</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link active"  :to="'/dashboard/4g/mds'"> MDS</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/4g/thrp_ul'"> THR_UL </router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/4g/erab_dr'"> E_RAB_DR</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link active"  :to="'/dashboard/4g/mob_sr'"> LTE_MOBILITY_SR</router-link>
      </li>
    </ul>
</template>

<style scoped>
ul li{
    margin-right: 10px;
}
</style>