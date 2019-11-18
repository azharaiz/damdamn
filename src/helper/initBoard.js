const initBoard = () => {
    const squares = Array(64).fill(null);
    squares[0] = "A";
    return squares;
};

export default initBoard;
