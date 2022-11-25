import React from "react";
import { AppState } from "..";
import {GameOver} from "./GameOver";
import {HP} from "./HP";
import { LogUI } from "./LogUI";

export const CombatUI: React.FC<{
    state: AppState;
}> = (props) => {
    return (
        <div>
            <div className="game">
                        <GameOver characters={props.state.characters}></GameOver>
            </div>
            <LogUI log={props.state.log}></LogUI>
            {props.state.characters.map((char, i) => (
                 <HP hp={char.health} character_name={char.name}/>

            ))}
        </div>
    );
};
