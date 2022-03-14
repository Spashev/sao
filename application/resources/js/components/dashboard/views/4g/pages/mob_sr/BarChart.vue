<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,

  data: function () {
    return {
      type:'mob_sr',
      data: [
    
      ],
      colors: {
        0: "#66c",
        1: "#F2BA13",
      },
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
            this.data[16][0],
            this.data[17][0],
       
      
         
 
          ],
          datasets: [
            {
              label: "LTE_MOBILITY_SR",
                 backgroundColor: [
                  this.define_color(this.data[0][2],this.data[0][3]),
                this.define_color(this.data[1][2],this.data[1][3]),
                this.define_color(this.data[2][2],this.data[2][3]),
                this.define_color(this.data[3][2],this.data[3][3]),
                this.define_color(this.data[4][2],this.data[4][3]),
                this.define_color(this.data[5][2],this.data[5][3]),
               this.define_color(this.data[6][2],this.data[6][3]),
               this.define_color(this.data[7][2],this.data[7][3]),
                this.define_color(this.data[8][2],this.data[8][3]),
                this.define_color(this.data[9][2],this.data[9][3]),
                this.define_color(this.data[10][2],this.data[10][3]),
                this.define_color(this.data[11][2],this.data[11][3]),
                this.define_color(this.data[12][2],this.data[12][3]),
                this.define_color(this.data[13][2],this.data[13][3]),
                this.define_color(this.data[14][2],this.data[14][3]),
                this.define_color(this.data[15][2],this.data[15][3]),
                this.define_color(this.data[16][2],this.data[16][3]),
                this.define_color(this.data[17][2],this.data[17][3]),
                
              ],

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
    getKpi() {
      axios
        .get(`http://192.168.212.2:8009/dashboard/kpi_4g_dash/`+this.type)
        .then((response) => {
         this.data = response.data.data;

          this.render(this.data);
        });
    },
    define_color(color1,color2)
    {
      console.log(color1);
      if(color1==1)
      {
        return 'red';
      }
      else if(color2==1)
      {
        return 'orange';
      }
      else{
        return 'blue';
      }
      
      
    }

  },
  mounted() {
    this.getKpi();
  },
  
};
</script>
