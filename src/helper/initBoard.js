import Fire from "../components/piece/fire";
import Tree from "../components/piece/tree";

const initBoard = () => {
    const squares = Array(55).fill(null);
    for (let i = 15; i < 25; i++) {
        squares[i] = new Tree(1);
        squares[i+15] = new Fire(2);
    }
    squares[0] = new Tree(1);
    squares[2] = new Tree(1);
    squares[4] = new Tree(1);
    squares[6] = new Tree(1);
    squares[7] = new Tree(1);
    squares[8] = new Tree(1);
    squares[12] = new Tree(1);
    squares[54] = new Fire(2);
    squares[52] = new Fire(2);
    squares[50] = new Fire(2);
    squares[48] = new Fire(2);
    squares[47] = new Fire(2);
    squares[46] = new Fire(2);
    squares[42] = new Fire(2);
    return squares;
};

export default initBoard;
