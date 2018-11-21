import React from "react";
import Computer from "../components/computer";
import styled from "styled-components";

import "../../static/style.css";

const FullDiv = styled.div`
    height: 100vh;
    width: 100vw;
`;
export default () => (
    <FullDiv>
        <Computer />
    </FullDiv>
);
