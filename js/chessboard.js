import { Node } from './node.js';

export class ChessBoard{
    constructor(){
        this.startingPosition = null;
        this.desiredPosition = null;
        this.root = null;
        this.pathEndingNode = null;
    }

    setStartingPostion(coords){
        this.startingPosition = coords;
        this.root = new Node(coords);
    }

    setDesiredPosition(coords){
        this.desiredPosition = coords;
    }

    setPathEndingNode(node){
        this.pathEndingNode = node;
    }

    getMoves(currentPosition){
        const moves =  [[-2,-1],[-2,1],[-1,2],[-1,-2],[1,2],[1,-2],[2,1],[2,-1]];
        let possibleMoves = [];
        moves.forEach(move =>{
            let newCoordinates = [(currentPosition[0] + move[0]), (currentPosition[1] + move[1])];
            if(!this.outOfBounds(newCoordinates)) possibleMoves.push(newCoordinates);
        })
        return possibleMoves;
    }

    hasStartingPosition(){
        if(this.startingPosition) return true;
        return false;
    }

    isActive(){
        if(this.hasStartingPosition && this.desiredPosition) return true;
        return false;
    }

    outOfBounds(desiredMoveArr){
        let horizontalMove = desiredMoveArr[0];
        let verticalMove = desiredMoveArr[1];
        if(horizontalMove < 0 || horizontalMove > 7) return true;
        if(verticalMove < 0 || verticalMove > 7) return true;
        return false;
    }

    randomPosition(){
        let randomX = Math.floor(Math.random() * 8);
        let randomY = Math.floor(Math.random() * 8);
        this.startingPosition = [randomX, randomY];    
        return this.startingPosition;
    }

    createPath(currentNode = this.pathEndingNode, pathArr){
        // if(!currentNode.parent){
        //     return;
        // }

        // let next = this.createPath(currentNode.parent, pathArr);

    }

    knightMoves(){
        let queue = [];
        let currentNode = this.root;
        queue.push(currentNode);
        while(queue.length){
            // In practice would create a queue class to be able to shift 0(1) rather than o(n) 
            currentNode = queue.shift();
            if(currentNode.coordinates[0] === this.desiredPosition[0] && 
                currentNode.coordinates[1] === this.desiredPosition[1]){
                    alert('found');
                    this.setPathEndingNode(currentNode);
                    console.log(this.pathEndingNode);
                    break;
            }
            let possibleMoves = this.getMoves(currentNode.coordinates);
            possibleMoves.forEach(move =>{
                let newNode = new Node(move);
                newNode.parent = currentNode;
                queue.push(newNode);
            })
        }

        let path = this.createPath();

        return path;
    }


}
