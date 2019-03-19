const m = {
    'a': 1,
    'b': {
        'c': 2,
        'd': [3, 4]
    },
    'e': {
        'f': 5,
        'g': {
            'h': 6,
            'i': [7,8],
            'j': {
                'k': 9,
                'l': [10,11,12]
            }
        }
    }
}
let o = {}
var flatJSON = (input, layer) => {
    for(let key in input) {
        if(typeof(input[key]) === "object" && !Array.isArray(input[key])) {
            flatJSON(input[key], `${(layer ? layer + '.' : '') + key}`)
        } else {
           o[`${(layer ? layer + '.' : '') + key}`] = input[key]
        }
    }
}
flatJSON(m, '');
console.log(m)
console.log(o)

