import React from "react";
import styled from "styled-components";
import { CmdLine } from "../../../static/commons/styled-components";
const CommandLine = styled.input`
    background-color: black;
    color: white;
    font-family: "Overpass Mono", monospace;
    font-size: calc(0.8rem + 0.2vw);
    border: 0px;
    outline: none;
    width: 50%;
`;

const CommandLineComponent = props => (
    <div>
        <CmdLine>visitor:~$ </CmdLine>
        <CommandLine
            placeholder={props.isFirstCommand ? "to start write help ;)" : null}
            onKeyPress={e => props.handleEnterPress(e)}
            value={props.cmd}
        />
    </div>
);

export default CommandLineComponent;
