export default function formatDate(date: Date) {
  // Format dates in US-style month/day/year with zero-padding
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}
