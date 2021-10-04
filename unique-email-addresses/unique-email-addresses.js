/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const cleanEmails = new Set();
    
    for (let email of emails) {
        let parts = email.split('@');
        let local = parts[0].split('+');
        cleanEmails.add(local[0].replaceAll('.', '') + '@' + parts[1]);
    }
    console.log(cleanEmails);
    return cleanEmails.size;
};