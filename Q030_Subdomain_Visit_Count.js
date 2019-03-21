/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let domains =[]
    let output = []
    cpdomains.forEach(d => {
        let dn = parseInt(d.split(' ')[0])
        let ds = d.split(' ')[1]
        let dArray = []
        while(ds.includes('.')){
            dArray.push(ds)
            ds = ds.substr(ds.indexOf('.')+1)
        }
        dArray.push(ds)
        dArray.forEach(d => {
            if(!domains.includes(d)){
                domains.push(dn, d)
            } else {
                domains[domains.indexOf(d) - 1] += dn
            }
        })
    })
    console.log(domains)
    for(let i = 0; i<domains.length; i+=2) {
        output.push(`${domains[i]} ${domains[i+1]}`)
    }
    return output
};

console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))