import styled from "styled-components"
import { colors } from "../../commons/colors"

export const Menu = styled.div`
    background-color: ${colors.DARKGREY02};
    position: absolute;
    bottom: ${({ height, isOpen }) => (isOpen ? "50px" : `${-height}px`)};
    transition: 500ms bottom;
    width: 100vw;
    border-bottom: 0.5px solid ${colors.GREEN};
    padding-left: 10px;
    box-sizing: border-box;
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ListMenu = styled.ul`
    list-style: none;
    color: white;
    padding: 0;
    font-size: 1.3em;
    color: white;
    &:hover {
        color: ${colors.GREEN};
    }
`

export const SelectItemUnderLine = styled.div`
    height: 4px;
    width: ${({ isSelected }) => (isSelected ? "80px" : "0")};
    transition: width 250ms;
    background-color: ${colors.GREEN};
    margin-bottom: 10px;
`
export const MenuTitle = styled.h1`
    color: ${colors.GREEN};
`

export const ContactMenuSection = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-family: Montserrat;
`

export const ContactMenuSectionItem = styled.span`
    margin: 4px 0;
    font-size: 16px;
`
