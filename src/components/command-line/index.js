import React from "react";
import styled from "styled-components";

const CommandLine = styled.input`
    background-color: black;
    color: white;
    font-family: "Overpass Mono", monospace;
    font-size: calc(0.8rem + 0.2vw);
    border: 0px;
    outline: none;
`;

const CommandLineComponent = props => (
    <div>
        visitor:~${" "}
        <CommandLine
            placeholder="to start write help ;)"
            onKeyPress={e => props.handleEnterPress(e)}
        />
    </div>
);

export default CommandLineComponent;
