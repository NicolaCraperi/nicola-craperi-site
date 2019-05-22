import React, { useState, useEffect } from "react"
import {
    Menu,
    ListMenu,
    SelectItemUnderLine,
    MenuTitle,
    MenuContainer,
    ContactMenuSection,
    ContactMenuSectionItem,
} from "./styled"
import { Link } from "gatsby"
const FullMenu = React.forwardRef((props, ref) => {
    const [height, setHeight] = useState(0)
    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.offsetHeight)
        }
    }, [])

    const { setCurrentPosition, currentPosition } = props

    return (
        <Menu ref={ref} height={height} isOpen={props.isOpen}>
            <MenuContainer>
                <div>
                    <MenuTitle>Menu</MenuTitle>
                    <ListMenu>
                        {props.titles.map(({ title, routeName }, i) => (
                            <div key={i}>
                                <Link to={`/${routeName}`}>
                                    <li onClick={() => setCurrentPosition(i)}>
                                        {i} - {title}
                                    </li>
                                </Link>
                                <SelectItemUnderLine
                                    isSelected={currentPosition === i}
                                />
                            </div>
                        ))}
                    </ListMenu>
                </div>

                <ContactMenuSection>
                    <h3>CONTACT</h3>{" "}
                    <ContactMenuSectionItem>
                        Via san pietro, 175 Colorina (SO)
                    </ContactMenuSectionItem>
                    <ContactMenuSectionItem>
                        email crape97@gmail.com{" "}
                    </ContactMenuSectionItem>{" "}
                    <ContactMenuSectionItem>
                        tel +39 331 788 6655
                    </ContactMenuSectionItem>
                </ContactMenuSection>
                <div>
                    <p>FOLLOW US</p>
                </div>
            </MenuContainer>
        </Menu>
    )
})
export default FullMenu
