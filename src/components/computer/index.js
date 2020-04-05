import React from "react"
import styled from "styled-components"
import CommandLine from "../command-line"
import CommandLineOutput from "../command-line-output"
import { colors } from "../../commons/colors"
const Computer = styled.div`
    width: 640px;
    height: 448px;
    border: 2px solid white;
    border-radius: 10px;
`

const Monitor = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
    background: black;
    color: white;
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
`

const FakeButtonsContiner = styled.div`
    display: flex;
    padding-bottom: 6px;
    border-bottom: 1px solid white;
`
const RedCircle = styled.div`
    background-color: ${colors.RED};
    width: 12px;
    height: 12px;
    border-radius: 10px;
    margin-right: 4px;
`
const GreyCircle = styled.div`
    background-color: grey;
    width: 12px;
    height: 12px;
    border-radius: 10px;
    margin-right: 4px;
`
class ComputerCase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cCounter: 0,
            clrData: [],
        }
    }

    handleEnterPress = e => {
        const { cCounter, clrData } = this.state
        let _cCounter = cCounter
        let _clrData = clrData

        if (e.key === "Enter") {
            if (e.target.value.length > 0 && e.target.value !== "clear") {
                _cCounter++
                _clrData.push("" + e.target.value)
                this.setState({
                    cCounter: _cCounter,
                    clrData: _clrData,
                })
            } else {
                this.setState({
                    cCounter: 0,
                    clrData: [],
                })
            }
            e.target.value = ""
        }
    }
    render() {
        const { clrData } = this.state
        console.log(clrData.length - 1 === 0)
        return (
            <Computer>
                <Monitor>
                    {" "}
                    <FakeButtonsContiner>
                        <RedCircle />
                        <GreyCircle />
                        <GreyCircle />
                    </FakeButtonsContiner>
                    {clrData.length > 0
                        ? clrData.map((cmd, i) => (
                              <CommandLineOutput cmd={cmd} key={i} />
                          ))
                        : null}
                    <CommandLine
                        isFirstCommand={clrData.length === 0}
                        handleEnterPress={e => {
                            this.handleEnterPress(e)
                        }}
                    />
                </Monitor>
            </Computer>
        )
    }
}
export default ComputerCase
