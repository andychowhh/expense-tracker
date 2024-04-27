import React from "react";
import axios from "@/app/api/axios";
import { Summary } from "@/types";
import { isGuest } from "@/utils";
import { MOCK_LAST_YEAR_SUMMARY } from "@/constants/dashboard";
import { getLastTwelveMonths } from "@/utils/date";
import moment from "moment";
import { LineChartGroupItems } from "./LineChartGroupItems";

export const LineChartGroups = async () => {
  let summaryData: Summary[] = [];
  if (isGuest()) {
    summaryData = MOCK_LAST_YEAR_SUMMARY;
  } else {
    const lastTwelveMonths = getLastTwelveMonths(moment());
    const [from, to] = [lastTwelveMonths[0], lastTwelveMonths[11]];
    const summaryAmountData: Summary[] = (
      await axios.get(`/summary/amount?from=${from}&to=${to}`)
    ).data;

    summaryData = lastTwelveMonths.map((yearMonth) => {
      const item = summaryAmountData.find(({ _id }) => _id === yearMonth);
      return item
        ? item
        : {
            _id: yearMonth,
            totalExpense: 0,
            totalIncome: 0,
          };
    });
  }

  return <LineChartGroupItems data={summaryData} />;
};
