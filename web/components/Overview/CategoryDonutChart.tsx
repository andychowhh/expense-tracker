"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
} from "chart.js";
import { CategoryDonutChartData } from "@/types";

ChartJS.register(ArcElement, Tooltip, Legend);

const textCenter: Plugin<"doughnut", unknown> = {
  id: "textCenter",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = "bolder 30px sans-serif";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.textBaseLine = "middle";
    ctx.fillText(
      "text",
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

export const CategoryDonutChart = async ({
  data,
}: {
  data: CategoryDonutChartData;
}) => {
  return <Doughnut data={data} plugins={[textCenter]} />;
};
