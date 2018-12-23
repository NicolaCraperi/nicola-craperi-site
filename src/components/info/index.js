import React from "react";
import styled from "styled-components";

const InfoWrapper = styled.div`
    margin: 50px;
    color: white;
    width: 400px;
`;

const Link = styled.a`
    color: yellow;
`;
export default () => (
    <InfoWrapper>
        <h1>Nicola Craperi</h1>
        <p>
            Hello! I'm Nicola Craperi.
            <br /> I'm currently working{" "}
            <Link href="https://mondora.com/#!/">@Mondora</Link> as Junior
            Software Developer.
            <br /> I'm curious, and i love learn new things about programming
            world.
        </p>
    </InfoWrapper>
);
