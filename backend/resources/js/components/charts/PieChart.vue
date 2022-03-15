<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(138, 38,199, 0.9)");
    this.gradient.addColorStop(0.5, "rgba(138, 38,199, 0.8)");
    this.gradient.addColorStop(1, "rgba(138, 38,199, 0.9)");

    this.gradient2.addColorStop(0, "rgba(196,199,38, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(196,199,38, 0.8)");
    this.gradient2.addColorStop(1, "rgba(196,199,38, 0)");
    this.renderChart(
      {
        labels: ["Books", "Magazines", "Newspapers"],
        datasets: [
          {
            backgroundColor: [this.gradient, this.gradient2, "#36c"],
            data: [40, 20, 10]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>