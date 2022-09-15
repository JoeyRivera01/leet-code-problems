var daysBetweenDates = function(date1, date2) {
  if (date2 === date1) return 0;
  
  if (date2 > date1) {
    console.log(new Date(date2) - new Date(date1))
    return (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24);
  }
  
  return (new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24);
};