import React from "react";
import styled from "styled-components";
import { data } from "../../../static/data";
import { CmdLine } from "../../../static/commons/styled-components";

const KeyWord = styled.span`
    color: ${props => props.color || "#54b5e5"};
    margin-right: 10px;
`;

const CommandLineOutput = props => {
    let commandResult = data[props.cmd.trim()];
    if (props.cmd.toLowerCase().includes("coffee")) {
        commandResult = { "418": "I'm a teapot" };
    } else if (!commandResult) {
        commandResult = {
            error: "unknow command - write help for commands list"
        };
    }
    return (
        <>
            <CmdLine>visitor:~$ </CmdLine>
            {props.cmd}
            <br />
            {Object.keys(commandResult).map((key, i) => {
                let value = commandResult[key];
                return (
                    <React.Fragment key={i}>
                        <KeyWord
                            color={
                                key === "error" || key === "418" ? "red" : null
                            }
                        >
                            {key}
                        </KeyWord>
                        {value}
                        <br />
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default CommandLineOutput;
