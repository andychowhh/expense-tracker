import moment from "moment";

export const formatDate = (date: Date): string => {
  return moment(date).local().format("YYYY-MM-DD");
};

export const toLocalDate = (dateStr: string): Date => {
  return moment(dateStr, "YYYY-MM-DD").toDate();
};

export const getYearMonthRangetoday = (today: Date) => {
  console.log('scss');
  
  const dateFormat = "YYYY-MM";
  const fromDate = moment(today)
    .subtract(1, "year")
    .add(1, "month")
    .format(dateFormat);
  const toDate = moment(today).endOf("month").format(dateFormat);

  return [fromDate, toDate];
};
