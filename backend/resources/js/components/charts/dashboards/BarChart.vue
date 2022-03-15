<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,

  data: function () {
    return {
      data: [
    
      ],
    };
  },
  methods: {
    	handle (point, event) {
    	const item = event[0]
    	this.$emit('on-receive', {
      	item: item,
        index: item._index,
        value: this.data[item._index]
       
      })
    },
    render(data) {
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
      
         
 
          ],
          datasets: [
            {
              label: "PS_TRAFFIC_DL_GB",
              backgroundColor: "#66c",

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
              
          
     
              ],
            },
          ],
          options: {
            scales: {
              xAxes: [
                {
                  barPercentage: 200,
                },
              ],
            },
            
            
          },
        },
        { responsive: true, maintainAspectRatio: false, onClick:this.handle }
      );
    },
    getAlarms() {
      axios
        .get(`http://192.168.212.2:8009/dashboard/kpi_4g_dash/data_gb_dl`)
        .then((response) => {
         this.data = response.data.data;

          this.render(this.data);
        });
    },

  },
  mounted() {
    this.getAlarms();
  },
  
};
</script>
