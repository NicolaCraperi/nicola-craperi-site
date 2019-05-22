import React, { useState, useRef, useEffect } from "react"
import Helmet from "react-helmet"
import BottomNavbar from "../components/bottom-bar"
import Menu from "../components/menu"
import Transition from "../components/transitions"
import { navBarEntries } from "../data"
import { navigate } from "gatsby"

const Layout = ({ children, location }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [currentPosition, setCurrentPosition] = useState(0)
    const [direction, setDirection] = useState("UP")
    const menuRef = useRef()

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress)
        return () => window.removeEventListener("keydown", handleKeyPress)
    })

    //TODO SISTEMARE LE MAGIC STRING
    const handleKeyPress = ({ key }) => {
        switch (key) {
            case "ArrowDown":
                if (currentPosition < navBarEntries.length - 1) {
                    const { routeName: nextRouteDown } = navBarEntries[
                        currentPosition + 1
                    ]

                    navigate(`/${nextRouteDown}`)
                    setCurrentPosition(currentPosition + 1)
                    setDirection("DOWN")
                }

                break
            case "ArrowUp":
                if (currentPosition > 0) {
                    const { routeName: nextRouteTop } = navBarEntries[
                        currentPosition - 1
                    ]
                    navigate(`/${nextRouteTop}`)
                    setCurrentPosition(currentPosition - 1)
                    setDirection("UP")
                }

                break

            default:
                break
        }
    }

    return (
        <>
            <Helmet
                title="Mondora.com"
                meta={[
                    { name: "description", content: "Sample" },
                    { name: "keywords", content: "sample, something" },
                ]}
            >
                <html lang="en" />
            </Helmet>
            <Transition direction={direction} location={location}>
                {children}
            </Transition>
            <BottomNavbar
                entries={navBarEntries}
                handleMenu={() => {
                    setMenuOpen(!menuOpen)
                }}
                setCurrentPosition={position => setCurrentPosition(position)}
                currentPosition={currentPosition}
            />
            <Menu
                ref={menuRef}
                titles={navBarEntries}
                isOpen={menuOpen}
                setCurrentPosition={position => setCurrentPosition(position)}
                currentPosition={currentPosition}
            />
        </>
    )
}
export default Layout
