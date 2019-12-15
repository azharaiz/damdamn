import Piece from "./piece.js";

export default class Tree extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://image.flaticon.com/icons/svg/489/489969.svg"
        : "https://image.flaticon.com/icons/svg/489/489969.svg"
    );
  }
}
