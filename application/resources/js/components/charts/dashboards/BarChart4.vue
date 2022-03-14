<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data: function () {
    return {
      data:[],
    };
  },
    methods: {
    getAlarms() {
      axios.get(`http://192.168.212.2:8009/dashboard/kpi_4g_dash/thrp_ul`).then((response) => {
        this.data=response.data.data;
       
          this.renderChart(
      {
        labels: [
          this.data[0][0],
          this.data[1][0],
          this.data[2][0],
          this.data[3][0],
          this.data[4][0],
          this.data[5][0],
          this.data[6][0],
          this.data[7][0],
          this.data[8][0],
          this.data[9][0],
          this.data[10][0],
          this.data[11][0],
          this.data[12][0],
          this.data[13][0],
          this.data[14][0],
          this.data[15][0],
          this.data[16][0],
          this.data[17][0],
        ],
        datasets: [
          {
            label: "THR_UL",
            backgroundColor: "#061F66",
            data: [
            this.data[0][1], 
            this.data[1][1], 
            this.data[2][1], 
            this.data[3][1], 
            this.data[4][1], 
            this.data[5][1], 
            this.data[6][1], 
            this.data[7][1],  
            this.data[8][1],  
            this.data[9][1],  
            this.data[10][1], 
            this.data[11][1], 
            this.data[12][1], 
            this.data[13][1], 
            this.data[14][1], 
            this.data[15][1], 
            this.data[16][1], 
            this.data[17][1], 
            ]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
      });
      
    },
    
  },
  mounted() {
    this.getAlarms()
    
  
  }
};
</script>
