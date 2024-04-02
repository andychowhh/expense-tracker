import { CategoryDonutChartData, Summary } from "@/types";
import { CATEGORIES } from "@/constants";
import { ChartData } from "chart.js";

// export const data = {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

export const formatSummaryData = (
  summaryData: Summary[]
): CategoryDonutChartData => {
  const categoryWithSummary = CATEGORIES.map((category) => {
    const summary = summaryData.find(
      (summary) => summary._id === category.value
    );
    if (!summary) {
      return;
    }

    const { totalAmount, count } = summary;
    return {
      ...category,
      totalAmount,
      count,
    };
  }).filter(Boolean);

  const data: ChartData<"doughnut", number[], unknown> = {
    labels: categoryWithSummary.map((category) => category?.label),
    datasets: [
      {
        label: "# of Votes",
        data:
          categoryWithSummary.map((category) => category?.totalAmount!) ?? [],
        backgroundColor:
          categoryWithSummary.map((category) => category?.backgroundColor) ??
          [],
        borderColor:
          categoryWithSummary.map((category) => category?.borderColor) ?? [],
        borderWidth: 1,
      },
    ],
  };

  return data;
};
