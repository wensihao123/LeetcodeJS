text='key1=value1;key2=value2\nkeyA=valueA\nkeyB1=valueB1;keyB2=valueB2\nkeyC=valueC'
a=[{'key1' : 'value1','key2' : 'value2'},{'keyA' : 'valueA'},{'keyB1' : 'valueB1','keyB2' : 'valueB2'},{'keyC' : 'valueC'}]


const store = (input) => {
    let output = ''
    input.forEach(item => {
        for(let key in item)output += `${key}=${item[key]};`
        output = output.substring(0, output.length-1)
        output += '\n'
    })
    return output.substring(0, output.length-1)
}

const load = (input) => {
    let inputArray = input.split('\n')
    return inputArray.map(item => {
        let o = {}
        let itemArray = item.split(';')
        itemArray.forEach(itemA => {
            o[`${itemA.split('=')[0]}`] = itemA.split('=')[1]
        })
        return o
    })
}

console.log(store(a))
console.log(load(text))