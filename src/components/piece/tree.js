import Piece from './piece.js';

export default class Tree extends Piece {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
    }

    isMovePossible(src, dest){
        return (
            src + 1 === dest ||
            src + 4 === dest ||
            src + 5 === dest ||
            src + 6 === dest ||
            src - 1 === dest ||
            src - 4 === dest ||
            src - 5 === dest ||
            src - 6 === dest
        );
    }

    /**
     * always returns empty array because of one step
     * @return {[]}
     */
    getSrcToDestPath(src, dest){
        return [];
    }
}