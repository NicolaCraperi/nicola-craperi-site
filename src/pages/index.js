import React from "react"
import { PagesContainer } from "../commons/styled"
import Keyboard from "../../static/icons/keyboard.svg"

import Me from "../../static/images/me.jpg"
import styled from "styled-components"
import { colors } from "../commons/colors"
import { useCountUp } from "react-countup"
import Computer from "../components/computer"
const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`
const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`

const ComContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 50px;
    margin: 0;
    margin-top: 20px;
    color: white;
`
const Separator = styled.h1`
    height: 5px;
    background-color: ${colors.RED};
    width: 100px;
`

const SubTitle = styled.span`
    font-size: 18px;
    font-family: Montserrat;
    color: white;
    width: 400px;
    text-align: left;
`

const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`
const CounterInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    flex-direction: column;
    width: 100px;
`

const CounterSpan = styled.span`
    color: ${colors.RED};
    font-size: 40px;
`

const CounterInfoSpan = styled.span`
    margin-top: 10px;
    color: white;
    text-align: center;
`

const HomeImage = styled.img`
    border: 3px solid ${colors.RED};
    width: 100px;
    border-radius: 50px;
`

const ArrowsContainer = styled.div`
    position: absolute;
    left: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    bottom: 30px;
    font-family: Montserrat;
`

export default () => {
    const { countUp: years } = useCountUp({ end: 21 })
    const { countUp: expirenceYears } = useCountUp({ end: 2 })

    return (
        <PagesContainer>
            <Container>
                <InfoContainer>
                    <HomeImage alt="mondora.com" src={Me} />
                    <Title>NICOLA CRAPERI</Title>
                    <Separator />
                    <SubTitle>
                        Hello! I'm Nicola Craperi. I'm currently working
                        @Mondora as junior software developer. I'm curious, and
                        i love learn new things about programming world.
                    </SubTitle>
                    <CounterContainer>
                        <CounterInfoContainer>
                            <CounterSpan>{years}</CounterSpan>
                            <CounterInfoSpan>Y/O</CounterInfoSpan>
                        </CounterInfoContainer>
                        <CounterInfoContainer>
                            <CounterSpan>{expirenceYears}</CounterSpan>
                            <CounterInfoSpan>
                                YEARS OF EXPERIENCE
                            </CounterInfoSpan>
                        </CounterInfoContainer>
                    </CounterContainer>
                    <ArrowsContainer>
                        <img src={Keyboard} width={70} alt="" />
                        <span>To move use arrow keys</span>
                    </ArrowsContainer>
                </InfoContainer>
                <ComContainer>
                    {" "}
                    <Computer />
                </ComContainer>
            </Container>
        </PagesContainer>
    )
}
