import { Node } from './node.js';

export class ChessBoard{
    constructor(){
        this.startingPosition = null;
        this.desiredPosition = null;
        this.root = null;
        this.pathEndingNode = null;
        this.path = [];
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

    getMoves(currentPosition){ // function that returns all possible moves within a given position
        const moves =  [[-2,-1],[-2,1],[-1,2],[-1,-2],[1,2],[1,-2],[2,1],[2,-1]];
        let possibleMoves = [];
        moves.forEach(move =>{
            let newCoordinates = [(currentPosition[0] + move[0]), (currentPosition[1] + move[1])];
            if(!this.outOfBounds(newCoordinates)) possibleMoves.push(newCoordinates);
        })
        return possibleMoves;
    }

    hasStartingPosition(){ // function to determine if board has a starting position
        if(this.startingPosition) return true;
        return false;
    }

    isActive(){ //function to determine if board is ready for a knights travail
        if(this.hasStartingPosition && this.desiredPosition){
            return true;
        } 
        return false;
    }

    outOfBounds(desiredMoveArr){ // function to determine if move is out of bounds
        let horizontalMove = desiredMoveArr[0];
        let verticalMove = desiredMoveArr[1];
        if(horizontalMove < 0 || horizontalMove > 7) return true;
        if(verticalMove < 0 || verticalMove > 7) return true;
        return false;
    }

    randomPosition(){ // function to create a random knight position
        let randomX = Math.floor(Math.random() * 8);
        let randomY = Math.floor(Math.random() * 8);
        this.startingPosition = [randomX, randomY];    
        return this.startingPosition;
    }

    createPath(currentNode = this.pathEndingNode){ // recursive function that creates a path
        if(!currentNode.parent){
            this.path.push(currentNode.coordinates);
            return;
        }

        this.createPath(currentNode.parent);
        this.path.push(currentNode.coordinates);
        return;
    }

    clearPath(){
        this.path = [];
        return;
    }

    knightMoves(){ // function that determines what path is the shortes using BFS 
        let queue = [];
        let currentNode = this.root;
        queue.push(currentNode);
        while(queue.length){
            // In practice would create a queue class to be able to shift 0(1) rather than o(n) 
            currentNode = queue.shift();
            if(currentNode.coordinates[0] === this.desiredPosition[0] && 
                currentNode.coordinates[1] === this.desiredPosition[1]){
                    this.setPathEndingNode(currentNode);
                    break;
            }
            let possibleMoves = this.getMoves(currentNode.coordinates);
            possibleMoves.forEach(move =>{
                let newNode = new Node(move);
                newNode.parent = currentNode;
                queue.push(newNode);
            })
        }

        this.clearPath(); //clear previous path
        this.createPath(); // create new path

        return this.path;
    }


}
