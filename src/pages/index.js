import React from "react";
import Computer from "../components/computer";
import styled from "styled-components";
import Info from "../Info";
import "../../static/style.css";

const FullDiv = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: darkslategrey;
`;

const Row = styled.div`
    padding-top: 100px;
    display: flex;
`;
export default () => (
    <FullDiv>
        <Row>
            <Info />
            <Computer />
        </Row>
    </FullDiv>
);
