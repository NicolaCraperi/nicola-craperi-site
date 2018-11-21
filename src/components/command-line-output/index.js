import React from "react";
import styled from "styled-components";

const CommandOutput = styled.div`
    background-color: black;
    color: white;
`;

const KeyWord = styled.span`
    background-color: black;
    color: #9e4895;
`;

export default data => (
    <CommandOutput>
        <KeyWord>key:</KeyWord>value
    </CommandOutput>
);
