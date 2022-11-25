import React from "react";
import {BaseActions} from "../implementation/BaseCharacter";

export const GameOver: React.FC<{
  characters: BaseActions[];
}> = (props) => {
  let count = 0;
  for (let i = 0; i <= props.characters.length - 1; i++) {
    if (!props.characters[i].isAlive) { count ++; }
  }
  if (count === props.characters.length - 1) {
    return (
    <div>
      <div className="gameover">GAME OVER</div>
    </div>
  );
  } else {return null; }
};
