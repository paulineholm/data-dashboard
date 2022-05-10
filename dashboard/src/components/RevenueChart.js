import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
const RevenueChart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [revenue, setRevenue] = useState();
  useEffect(() => {
    axios(`http://localhost:3000/monthlyrevenue`).then((response) => {
      setRevenue(response?.data);
      console.log(revenue);
      setIsLoading(false);
    });
  });
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Revenue Streams 2021",
        fontSize: 20,
      },
      legend: {
        display: true,
        position: "right",
      },
    },
  };
  return isLoading ? (
    <p>Data is loading, please wait</p>
  ) : (
    <>
      <Line
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Revenue",
              data: [
                5000, 15000, 50000, 55000, 59000, 65000, 75000, 85000, 95000,
                99000, 105000, 500000,
              ],
              backgroundColor: ["teal"],
              borderColor: ["black"],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={options}
      />
    </>
  );
};

export default RevenueChart;
