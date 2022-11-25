import React, { useEffect } from "react";
import { AppState } from "..";

export const MenuUI: React.FC<{
    state: AppState;
    start: () => void;
}> = (props) => {
    useEffect(() => {
        const tID = setTimeout(() => {
            props.start();
        }, 12000);
        return () => clearTimeout(tID);
    });
    return (
        <div className="game">
            <table className="grid wide">
                <tbody>
                    <tr>
                        <td colSpan={3}>
                            <h1 className="ascii">
                                Kata RPG
                            </h1>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            Once upon a time, tree heroes met to compete with each other. They were:
                        </td>
                    </tr>
                    {props.state.characters.map((x, i) => (
                        <tr key={i}>
                            <td>{x.name}</td>
                            <td>the</td>
                            <td>{x.classname()}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={3}>
                            <button onClick={() => props.start()}>BEGIN GAME</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
