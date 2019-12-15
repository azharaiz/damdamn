import Piece from "./piece.js";

export default class Fire extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://image.flaticon.com/icons/svg/426/426833.svg"
        : "https://image.flaticon.com/icons/svg/426/426833.svg"
    );
  }
}
