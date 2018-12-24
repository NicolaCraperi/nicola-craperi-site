import React from "react";
import styled from "styled-components";
import CommandLine from "../command-line";
import CommandLineOutput from "../command-line-output";
const Computer = styled.div`
    width: 640px;
    height: 448px;
    background: linear-gradient(
        rgba(180, 180, 180, 1) 0%,
        rgba(119, 119, 119, 1) 100%
    );
    border-radius: 18px;
    position: relative;
    margin: auto;
    box-shadow: inset 0 2px 7px 1px rgba(222, 222, 222, 0.5),
        inset 0 -5px 20px rgba(187, 200, 225, 0.35),
        0 2px 6px rgba(40, 39, 66, 0.14), 0 10px 20px rgba(40, 39, 66, 0.06),
        76px 75px 169px -35px rgba(0, 0, 0, 0.4);
    padding: 15px;

    &:after,
    &:before {
        content: "";
        position: absolute;
        border-radius: 3px 3px 0 0;
        width: calc(100% + 200px);
        height: 10px;
        background: linear-gradient(
            to right,
            rgba(180, 180, 180, 1) 0%,
            rgba(221, 226, 233, 1) 6%,
            rgba(180, 180, 180, 1) 15%,
            rgba(180, 180, 180, 1) 42%,
            rgba(119, 119, 119, 1) 42%,
            rgba(180, 180, 180, 1) 45%,
            rgba(180, 180, 180, 1) 53%,
            rgba(119, 119, 119, 1) 56%,
            rgba(180, 180, 180, 1) 56%,
            rgba(180, 180, 180, 1) 85%,
            rgba(221, 226, 233, 1) 94%,
            rgba(180, 180, 180, 1) 100%
        );
        left: -100px;
        bottom: -5px;
    }

    &:before {
        height: 6px;
        bottom: -11px;
        border-radius: 0 0 40px 40px;
        background: #dde2e9;
        box-shadow: inset 0 -25px 10px -20px rgba(0, 0, 0, 0.5);
    }
`;

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
`;
class ComputerCase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cCounter: 0,
            clrData: []
        };
    }

    handleEnterPress = e => {
        const { cCounter, clrData } = this.state;
        let _cCounter = cCounter;
        let _clrData = clrData;

        if (e.key === "Enter") {
            if (e.target.value.length > 0 && e.target.value !== "clear") {
                _cCounter++;
                _clrData.push("" + e.target.value);
                this.setState({
                    cCounter: _cCounter,
                    clrData: _clrData
                });
            } else {
                this.setState({
                    cCounter: 0,
                    clrData: []
                });
            }
            e.target.value = "";
        }
    };
    render() {
        const { clrData } = this.state;
        console.log(clrData.length - 1 === 0);
        return (
            <Computer>
                <Monitor>
                    {clrData.length > 0
                        ? clrData.map((cmd, i) => (
                              <CommandLineOutput cmd={cmd} key={i} />
                          ))
                        : null}
                    <CommandLine
                        isFirstCommand={clrData.length === 0}
                        handleEnterPress={e => {
                            this.handleEnterPress(e);
                        }}
                    />
                </Monitor>
            </Computer>
        );
    }
}
export default ComputerCase;
