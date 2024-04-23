import moment, { Moment } from "moment";

export const formatDate = (date: Date): string => {
  return moment(date).local().format("YYYY-MM-DD");
};

export const toLocalDate = (dateStr: string): Date => {
  return moment(dateStr, "YYYY-MM-DD").toDate();
};

export const getLastTwelveMonths = (today: Moment) => {
  const months: string[] = [];
  let date = today;
  for (let i = 0; i < 12; i++) {
    months.push(date.format("YYYY-MM"));
    date = date.subtract(1, "months");
  }

  return months.reverse();
};
