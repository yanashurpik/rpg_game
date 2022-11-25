import React from "react";

export const LogUI: React.FC<{
    log: string[];
}> = (props) => {
    return <div>
        <span className="block">☞ {props.log[0]}</span>
        <span className="block">{props.log[1]}</span>
    </div>;
};
