<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins
export default {
  extends: Line,
    mixins: [reactiveProp],
  data: function () {
    return {
      data:[],
    };
  },
   methods: {
     	handle (point, event) {
    	const item = event[0]
    	this.$emit('on-receive', {
      	item: item,
        index: item._index,
        value: this.chartdata[item._index]
       
      })
    },
  },
  mounted() {
  
    this.renderChart(
      {
      
       labels: [
          this.chartdata[0][0],
          this.chartdata[1][0],
          this.chartdata[2][0],
          this.chartdata[3][0],
          this.chartdata[4][0],
          this.chartdata[5][0],
          this.chartdata[6][0],
          this.chartdata[7][0],
          this.chartdata[8][0],
          this.chartdata[9][0],
          this.chartdata[10][0],
          this.chartdata[11][0],
          this.chartdata[12][0],
          this.chartdata[13][0]
        ],
        datasets: [
          {
            label: "PS_TRAFFIC_DL_GB ",
            data: [
            this.chartdata[0][2], 
            this.chartdata[1][2], 
            this.chartdata[2][2], 
            this.chartdata[3][2], 
            this.chartdata[4][2], 
            this.chartdata[5][2], 
            this.chartdata[6][2], 
            this.chartdata[7][2],
            this.chartdata[8][2],
            this.chartdata[9][2],
            this.chartdata[10][2],
            this.chartdata[11][2],
            this.chartdata[12][2],
            this.chartdata[13][2]],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
           {
            label: "THRESHOLD",
            data: [
            this.chartdata[0][3], 
            this.chartdata[1][3], 
            this.chartdata[2][3], 
            this.chartdata[3][3], 
            this.chartdata[4][3], 
            this.chartdata[5][3], 
            this.chartdata[6][3], 
            this.chartdata[7][3],
            this.chartdata[8][3],
            this.chartdata[9][3],
            this.chartdata[10][3],
            this.chartdata[11][3],
            this.chartdata[12][3],
            this.chartdata[13][3]],
            backgroundColor: "transparent",
            borderColor: "red",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: "My Data"
        },
         onClick:this.handle
      }
    );
  },
    props: {
    chartdata: {
      type: Number,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
    watch: {
    chartdata: function() {
      this._chart.destroy();
      this.renderChart(
      {
      
       labels: [
          this.chartdata[0][0],
          this.chartdata[1][0],
          this.chartdata[2][0],
          this.chartdata[3][0],
          this.chartdata[4][0],
          this.chartdata[5][0],
          this.chartdata[6][0],
          this.chartdata[7][0],
          this.chartdata[8][0],
          this.chartdata[9][0],
          this.chartdata[10][0],
          this.chartdata[11][0],
          this.chartdata[12][0],
          this.chartdata[13][0]
          
        ],
        datasets: [
          {
            label: "PS_TRAFFIC_DL_GB",
            data: [
            this.chartdata[0][2], 
            this.chartdata[1][2], 
            this.chartdata[2][2], 
            this.chartdata[3][2], 
            this.chartdata[4][2], 
            this.chartdata[5][2], 
            this.chartdata[6][2], 
            this.chartdata[7][2],
            this.chartdata[8][2],
            this.chartdata[9][2],
            this.chartdata[10][2],
            this.chartdata[11][2],
            this.chartdata[12][2],
            this.chartdata[13][2]
            
            ],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
            {
            label: "THRESHOLD",
            data: [
            this.chartdata[0][3], 
            this.chartdata[1][3], 
            this.chartdata[2][3], 
            this.chartdata[3][3], 
            this.chartdata[4][3], 
            this.chartdata[5][3], 
            this.chartdata[6][3], 
            this.chartdata[7][3],
            this.chartdata[8][3],
            this.chartdata[9][3],
            this.chartdata[10][3],
            this.chartdata[11][3],
            this.chartdata[12][3],
            this.chartdata[13][3]],
            backgroundColor: "transparent",
            borderColor: "red",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: "By Region"
        },
         onClick:this.handle
      }
    );
     // this.renderLineChart();
    }
  }


  
};
</script>