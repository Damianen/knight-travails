function getEdges(coords) {
    let possibleMovesX = [1, 2, 2, 1, -1, -2, -2, -1];
    let possibleMovesY = [2, 1, -1, -2, -2, -1, 1, 2];
    let edges = [];
    
    for (let i = 0; i < possibleMovesX.length; i++) {
        let coord = 
            [coords[0] + possibleMovesX[i], coords[1] + possibleMovesY[i]];

        if (coord[0] >= 0 && coord[1] >= 0 && coord[0] < 8 && coord[1] < 8) {
            edges.push(coord);
        }
    }

    return edges;
}

class Node {
    constructor (coords, parent) {
        this.coords = coords;
        this.edges = getEdges(coords);
        this.parent = parent;
    }
}

function knightMoves(startPos, endPos) {
    let queue = [];
    let path = [];
    let node;
    queue.push(new Node(startPos, null));

    while (true) {
        node = queue.shift();

        if (node.coords[0] === endPos[0] && node.coords[1] === endPos[1]) {
            break;
        }

        for (let i = 0; i < node.edges.length; i++) {
            queue.push(new Node(node.edges[i], node));
        }
    }

    while (node.parent != null) {
        path.unshift(node.coords);
        node = node.parent;
    }

    path.unshift(startPos);

    return path;
}

console.log(knightMoves([0, 0], [3, 2]));