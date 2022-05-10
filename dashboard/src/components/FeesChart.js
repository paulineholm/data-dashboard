import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const FeesChart = () => {
  return (
    <>
      <Pie
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(215, 92, 102, 0.2)",
                "rgba(205, 89, 102, 0.2)",
                "rgba(155, 29, 102, 0.2)",
                "rgba(100, 90, 122, 0.2)",
                "rgba(120, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(215, 92, 102,1)",
                "rgba(205, 89, 102, 1)",
                "rgba(155, 29, 102, 1)",
                "rgba(100, 90, 122, 1)",
                "rgba(120, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          },
        }}
      />
    </>
  );
};

export default FeesChart;
