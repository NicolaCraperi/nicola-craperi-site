import styled from "styled-components"
import { colors } from "./colors"
export const PagesContainer = styled.div`
    height: calc(100vh - 50px);
    background: ${props =>
        props.background ? `url(${props.background})` : colors.DARKGREY02};
    overflow-y: auto;
    background-size: cover;
    padding: ${({ padding }) => (padding ? " 20px" : "0")};
    box-sizing: border-box;
`
