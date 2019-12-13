import styled from "styled-components"
import { colors } from "../../commons/colors"
export const BottomBarContainer = styled.div`
    height: 50px;
    width: 100vw;
    background-color: ${props => props.containerColor};
    display: flex;
    z-index: 2;
    position: fixed;
    bottom: 0;
`
export const NumberPage = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: 0;
    background: rgba(0, 0, 0, 0);
    outline: none;
    z-index: 2;
    font-family: "gageda" !important;
    font-size: 16px;
    ${({ isActive }) =>
        isActive ? `border-bottom: 2px solid ${colors.RED}` : ""}
`

export const MenuButton = styled.button`
    width: 50px;
    height: 50px;
    z-index: 2;
    background: ${colors.RED};
    border: 0;
    outline: none;
`
