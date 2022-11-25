import React from "react";

export const HP: React.FC<{
  hp: number;
  character_name: string;
}> = (props) => {
  let hpString = "HP: [";
  for (let i = 10; i < 100; i++) {
    if (props.hp >= i * 30) { hpString += "█"; } else { hpString += " "; }
  }
  hpString += "] (" + props.hp + ")";
  return (
    <div>
      <div>{props.character_name}</div>
      <div className="hp">{hpString}</div>
    </div>
  );
};
