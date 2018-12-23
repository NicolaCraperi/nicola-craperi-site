import React from "react";
import Computer from "../components/computer";
import styled from "styled-components";
import Info from "../components/info";
import Helmet from "react-helmet";
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
        <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="description" content="Nicola Craperi personal site" />
            <title>Nicola Craperi | DEV</title>
        </Helmet>
        <Row>
            <Info />
            <Computer />
        </Row>
    </FullDiv>
);
