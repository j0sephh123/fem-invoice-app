export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const displayDate = (date: Date) => {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
