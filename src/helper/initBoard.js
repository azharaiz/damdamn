import Fire from "../components/piece/fire";
import Tree from "../components/piece/tree";

const initBoard = () => {
    const squares = Array(11).fill(null);
    squares[0] = [new Tree(2), null, new Tree(2), null, new Tree(2)];
    squares[1] = [null, new Tree(2), new Tree(2), new Tree(2), null];
    squares[2] = [null, null, new Tree(2), null, null];
    squares[3] = [new Tree(2), new Tree(2), new Tree(2), new Tree(2), new Tree(2)];
    squares[4] = [new Tree(2), new Tree(2), new Tree(2), new Tree(2), new Tree(2)];
    squares[5] = [null, null, null, null, null];
    squares[6] = [new Fire(1), new Fire(1), new Fire(1), new Fire(1), new Fire(1)];
    squares[7] = [new Fire(1), new Fire(1), new Fire(1), new Fire(1), new Fire(1)];
    squares[8] = [null, null, new Fire(1), null, null];
    squares[9] = [null, new Fire(1), new Fire(1), new Fire(1), null];
    squares[10] = [new Fire(1), null, new Fire(1), null, new Fire(1)];
    return squares;
};

export default initBoard;
