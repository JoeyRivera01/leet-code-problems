/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  const hashMap = {};
  for (let {id, ...rest} of employees) hashMap[id] = rest;
  
  function dfs(id) {
    let sum = hashMap[id].importance;
    for (let subId of hashMap[id].subordinates) sum += dfs(subId);
    return sum;
  }
  
  return dfs(id);
};