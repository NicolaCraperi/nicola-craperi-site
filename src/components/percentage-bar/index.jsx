import React, { useEffect, useState } from "react"

export const PercentageBar = ({ percentage }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (progress < percentage) {
                setProgress(progress + 1)
            }
        }, 25)
    }, [progress])

    const calucalteBar = () => {
        let bar = "[ "
        for (let i = 1; i < 50; i++) {
            if (i * 2 < progress) {
                bar += "█"
            } else {
                bar += "░"
            }
        }
        return bar + " ]"
    }

    const calcutateSpinner = () => {
        if (progress === percentage) {
            return "OK"
        }
        const rest = progress % 4
        switch (rest) {
            case 0: //-\|/
                return "-"
            case 1: //-\|/
                return "\\"
            case 2: //-\|/
                return "|"

            case 3: //-\|/
                return "/"
        }
    }

    const bar = calucalteBar()
    const spinner = calcutateSpinner()
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 30 }}>{spinner}</div>
            <div>{bar}</div>
            <div>{progress}%</div>
        </div>
    )
}
