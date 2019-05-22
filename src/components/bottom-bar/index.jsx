import React from "react"
import { BottomBarContainer } from "./styled"
import { NumberPage, MenuButton } from "./styled"
import { colors } from "../../commons/colors"
import { Link } from "gatsby"

const BottomBar = props => {
    const { entries, handleMenu, setCurrentPosition, currentPosition } = props
    return (
        <BottomBarContainer containerColor={colors.DARKGREY}>
            <MenuButton onClick={() => handleMenu()}>Menu</MenuButton>
            {entries.map(({ routeName }, i) => (
                <Link to={`/${routeName}`} key={i}>
                    {" "}
                    <NumberPage
                        key={i}
                        isActive={currentPosition === i}
                        onClick={() => setCurrentPosition(i)}
                    >
                        {i}
                    </NumberPage>
                </Link>
            ))}
        </BottomBarContainer>
    )
}
export default BottomBar
