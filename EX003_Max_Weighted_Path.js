nodes = [{
    'A': 1
}, {
    'B': 2
}, {
    'C': 3
}, {
    'D': 5
}, {
    'E': 4
}, {
    'F': 2
}]
links = [
    [{
        'from': 'A'
    }, {
        'to': 'B'
    }],
    [{
        'from': 'A'
    }, {
        'to': 'C'
    }],
    [{
        'from': 'B'
    }, {
        'to': 'D'
    }],
    [{
        'from': 'C'
    }, {
        'to': 'D'
    }],
    [{
        'from': 'C'
    }, {
        'to': 'E'
    }],
    [{
        'from': 'D'
    }, {
        'to': 'F'
    }],
    [{
        'from': 'E'
    }, {
        'to': 'F'
    }],
    [{
        'from': 'A'
    }, {
        'to': 'F'
    }]
]
const linkMap ={}
const pathArray = []
const weightArray = []
let count = 0
let pathSum = 0

const createLinkMap = (nodes, links) => {
    nodes.forEach(node => {
        for(let key in node)linkMap[key] = {'value': node[key]}
    })      
    links.forEach(link =>{        
        if(linkMap[link[0]['from']]['target']) {
            linkMap[link[0]['from']]['target'].push(link[1]['to'])
        } else {
            linkMap[link[0]['from']]['target'] = [link[1]['to']]
        }
    }
    )
    console.log("Link Map:")
    console.log(linkMap)
}

const findMaxWeightedPath = (linkMap, start, path, pathSum) => {
    if(linkMap[start]['target']){
        linkMap[start]['target'].forEach(node => {
            findMaxWeightedPath(linkMap, node, path + start, pathSum + linkMap[start]['value'])
        })
    } else {
        pathArray[count] = `${path + start}`
        weightArray[count] = pathSum + linkMap[start]['value']
        count ++
    }

}

createLinkMap(nodes, links)
findMaxWeightedPath(linkMap, 'A', '', 0)
console.log(pathArray)
console.log(weightArray)
console.log(Math.max(...weightArray))