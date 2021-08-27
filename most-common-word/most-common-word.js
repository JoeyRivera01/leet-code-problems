/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().split(/\W+/);
  const map = {};
  for (const w of words) {
    if (!bannedSet.has(w)) {
      if (map[w] == null) {
        map[w] = 0;
      }
      map[w]++;
    }
  }

  let result = '';
  let max = -Infinity;
  for (const w in map) {
    const count = map[w];
    if (count > max) {
      result = w;
      max = count;
    }
  }
  return result; 
};