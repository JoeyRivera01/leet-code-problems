/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = function(mat) {

  if (mat === null || mat.length === 0) {
    return [];
  }

  let n = mat.length;
  let m = mat[0].length;
  
  let result = [];
  let k = 0;
  
  for (let d = 0; d < n + m - 1; d++) {
    let intermediate = [];
    let r = d < m ? 0 : d - m + 1;
    let c = d < m ? d : m - 1;
    
    while (r < n && c > -1) {
      intermediate.push(mat[r][c]);
      r++;
      c--;
    }
    
    if (d % 2 === 0) {
      intermediate.reverse();
    }
    
    for (let i = 0; i < intermediate.length; i++) {
      result[k++] = intermediate[i];
    }
    
  }
  return result;
};