/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */

const findReplaceString = function(S, indexes, sources, targets) {
    let result = S.split('');
    console.log('starting result', result);
    
    indexes.forEach((indexInS, i) => {
        let sourceChars = sources[i];
        let targetChars = targets[i];
        console.log('srouceCHars', sourceChars, 'targetChars', targetChars);
        
        if (S.slice(indexInS, indexInS + sourceChars.length) === sourceChars) {
            result[indexInS] = [targetChars];
            console.log('result[indexInS] is now [targetChars]', [targetChars]);
            let elementsToReplace = sourceChars.length - 1;
            console.log('elements to replace', elementsToReplace);
            while (elementsToReplace > 0) {
                console.log('results are', result);
                console.log('while elements to replace is not 0')
                indexInS += 1;
                console.log('indexInS is now', indexInS);
                result[indexInS] = '';
                console.log('result[indexInS] is now an empty string')
                elementsToReplace -= 1;
                console.log('elementsToReplace decremented to ', elementsToReplace);
            }
        }
    });
    
    result = result.join('');
    console.log('ending result', result);
    return result;
}

// var findReplaceString = function(S, indexes, sources, targets) {
//   var result = S.split('');
//   indexes.forEach((indexInS, i) => {
//     var sourceChars = sources[i];
//     var targetChars = targets[i];
    
//     if (S.slice(indexInS, indexInS + sourceChars.length) === sourceChars) {
//       result[indexInS] = [targetChars];
//       var elementsToReplace = sourceChars.length - 1;
//       while (elementsToReplace > 0) {
//         indexInS += 1;
//         result[indexInS] = '';
//         elementsToReplace -= 1;
//       }
//     }
//   });
//   return result.join('');
// };