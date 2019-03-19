/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let results = []
    for (i in emails){
        [a, b] = emails[i].split('@')
        a = a.split('+')[0].split('.').join('')
        var outcome = a + '@' + b;
        if(!results.includes(outcome)) results.push(outcome)
    }
    return results.length  
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))