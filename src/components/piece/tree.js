import Piece from "./piece.js";

export default class Tree extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
    );
  }

  isMovePossible(src, dest, isDestEnemyOccupied, isEnemyBeforeOccupied) {
    if (
      (src + 1 === dest ||
        src + 4 === dest ||
        src + 5 === dest ||
        src + 6 === dest ||
        src - 1 === dest ||
        src - 4 === dest ||
        src - 5 === dest ||
        src - 6 === dest) &&
      !isDestEnemyOccupied
    ) {
      return true;
    } else if (
      (src + 2 === dest ||
        src + 8 === dest ||
        src + 10 === dest ||
        src + 12 === dest ||
        src - 2 === dest ||
        src - 8 === dest ||
        src - 10 === dest ||
        src - 12 === dest) &&
      isEnemyBeforeOccupied
    ) {
      return true;
    }
    return false;
  }

  getSrcToDestPath(src, dest) {
    let path = [];
    return path;
  }
}
