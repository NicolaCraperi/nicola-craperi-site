import React from "react";
import styled from "styled-components";
import gmail from "../../../static/images/gmail.svg";
import github from "../../../static/images/github.svg";
import linkedin from "../../../static/images/linkedin.svg";
import me from "../../../static/images/me.jpg";
const InfoWrapper = styled.div`
    margin: 50px;
    color: white;
    width: 400px;
`;

const Link = styled.a`
    color: yellow;
    text-decoration: none;
    &:hover {
        color: orange;
        transition: color 500ms;
    }
`;

const Contact = styled.div`
    display: flex;
    align-items: center;
    > a > img {
        margin-right: 10px;
        width: 40px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    > img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right: 10px;
        border-radius: 50%;
        border: 2px solid yellow;
        transition: width 500ms, height 500ms;

        &:hover {
            width: 150px;
            height: 150px;
            transition: width 500ms, height 500ms;
        }
    }
`;

export default () => (
    <InfoWrapper>
        <Title>
            <img src={me} alt="me" />
            <h1>Nicola Craperi</h1>
        </Title>

        <p>
            Hello! I'm Nicola Craperi.
            <br /> I'm currently working{" "}
            <Link href="https://mondora.com/#!/">@Mondora</Link> as junior
            software developer.
            <br /> I'm curious, and i love learn new things about programming
            world.
        </p>
        <Contact>
            <a href="mailto:crape@gmail.com">
                <img src={gmail} alt="gmail" />
            </a>
            <a
                href="https://github.com/NicolaCraperi"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={github} alt="github" />
            </a>
            <a
                href="https://it.linkedin.com/in/nicola-craperi-86595a162"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={linkedin} alt="linkedin" rel="noopener noreferrer" />
            </a>
        </Contact>
    </InfoWrapper>
);
