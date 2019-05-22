import React from "react"
import {
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group"

//This variable will be responsible for our animation duration
const timeout = 150

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
const getTransitionStylesTop = {
    entering: {
        height: "calc(100vh - 50px)",
        position: "absolute",
        top: "calc(-100vh + 50px)",
        width: "100vw",
    },
    entered: {
        height: "calc(100vh - 50px)",
        position: "absolute",
        transition: `top ${timeout}ms ease`,
        top: 0,
        width: "100vw",
    },
    exiting: {
        height: "calc(100vh - 50px)",
        position: "absolute",
        top: "calc(100vh - 50px)",
        transition: `top ${timeout}ms ease`,
        width: "100vw",
    },
}

const getTransitionStylesBottom = {
    entering: {
        height: "calc(100vh - 50px)",
        position: "absolute",
        bottom: "calc(-100vh + 50px)",
        width: "100vw",
    },
    entered: {
        height: "calc(100vh - 50px)",
        position: "absolute",
        transition: `bottom ${timeout}ms ease`,
        bottom: 50,
        width: "100vw",
    },
    exiting: {
        height: "calc(100vh - 50px)",
        position: "absolute",
        bottom: "calc(100vh + 50px)",
        transition: `bottom ${timeout}ms ease`,
        width: "100vw",
    },
}

const Transition = props => {
    const { children, location, direction } = props

    return (
        <TransitionGroup>
            <ReactTransition
                key={location.pathname}
                timeout={{
                    enter: timeout,
                    exit: timeout,
                }}
            >
                {status => (
                    <div
                        style={
                            direction === "UP"
                                ? {
                                      ...getTransitionStylesTop[status],
                                  }
                                : { ...getTransitionStylesBottom[status] }
                        }
                    >
                        {children}
                    </div>
                )}
            </ReactTransition>
        </TransitionGroup>
    )
}

export default Transition
