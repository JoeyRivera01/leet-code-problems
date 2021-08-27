/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  // function to get the body string after identifier
  const body = s => s.slice(s.indexOf(' ') + 1);
  // function to test if 
  const isNum = c => /\d/.test(c);

  // if body same then compare identifier
  const compare = (a, b) => {
    const n = body(a).localeCompare(body(b));
    if (n !== 0) return n;
    return a.localeCompare(b);
  };

  const digitLogs = [];
  const letterLogs = [];
  for (const log of logs) {
    if (isNum(body(log))){
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    } 
  }
  return [...letterLogs.sort(compare), ...digitLogs];
};