import styled, { keyframes } from "styled-components"
import { colors } from "./colors"
export const PagesContainer = styled.div`
    height: calc(100vh - 50px);
    background: ${props =>
        props.background ? `url(${props.background})` : colors.DARKGREY03};
    overflow-y: auto;
    background-size: cover;
    padding: ${({ padding }) => (padding ? " 20px" : "0")};
    box-sizing: border-box;
`

export const SepratorAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 70px;
 }`

export const PageTitle = styled.h1`
    margin-bottom: 5px;
`

export const Separator = styled.div`
    height: 5px;
    background-color: ${colors.GREEN};
    width: 70px;
    animation: ${SepratorAnimation} 1000ms;
`
