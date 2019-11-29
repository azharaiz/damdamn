export default class Piece {
  constructor(player, iconUrl) {
    this.player = player;
    this.style = { backgroundImage: "url(" + iconUrl + ")" };
  }
  // src = [xSrc, ySrc], dest = [xDest, yDest], isDestEnemyOccupied t/f, isEnemyBeforeOccupied t/f
  isMovePossible(src, dest, isDestEnemyOccupied, isEnemyBeforeOccupied) {
    const xSrc = src[0],
      ySrc = src[1],
      xDest = dest[0],
      yDest = dest[1];
    let xDiff = xDest - xSrc,
      yDiff = yDest - ySrc;
    if (
      !isDestEnemyOccupied &&
      !(xDiff === 0 && yDiff === 0) &&
      xDiff >= -1 && xDiff <= 1 &&
      yDiff >= -1 && yDiff <= 1
    ) {
      return true;
    } else if (
      isEnemyBeforeOccupied &&
      !isDestEnemyOccupied &&
      (xDiff === 2 || xDiff === -2 || xDiff === 0) &&
      (yDiff === 2 || yDiff === -2 || yDiff === 0) &&
      !(xDiff === 0 && yDiff === 0)
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
