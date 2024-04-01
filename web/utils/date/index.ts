import moment from "moment";

export const formatDate = (date: Date): string => {
  return moment(date).local().format("YYYY-MM-DD");
};

export const toLocalDate = (dateStr: string): Date => {
  return moment(dateStr, "YYYY-MM-DD").toDate();
};
