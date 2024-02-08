function formatDate(dateString: string) {
  var now = new Date();
  var date = new Date(dateString);

  var diffInTime = now.getTime() - date.getTime();
  var diffInDays = diffInTime / (1000 * 3600 * 24);

  if (diffInDays < 1) {
    return "Updated today";
  } else if (diffInDays < 7) {
    return `Updated ${Math.floor(diffInDays)} days ago`;
  } else if (diffInDays < 30) {
    return "Updated last week";
  } else if (diffInDays < 365) {
    return "Updated last month";
  } else {
    return `Updated on ${date.toLocaleString("en-us", {
      month: "short",
    })} ${date.getDate()}, ${date.getFullYear()}`;
  }
}

export { formatDate };
