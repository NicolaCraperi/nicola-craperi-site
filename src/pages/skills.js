import React, { useState } from "react"
import { PagesContainer, Separator, PageTitle } from "../commons/styled"
import { colors } from "../commons/colors"
import styled, { keyframes } from "styled-components"
import { skills } from "../data"
import { PercentageBar } from "../components/percentage-bar"

const LanguageContainer = styled.div`
    padding: 20px;
    box-sizing: border-box;
`

const FrameworkContainer = styled.div`
    display: flex;
`

const ListItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`
const ListItem = styled.div`
    background-color: ${colors.RED};
    height: 15px;
    width: 15px;
`

const Skills = props => {
    const [position, setPosition] = useState(0)

    return (
        <PagesContainer backgroundColor="yellow" padding={true}>
            <PageTitle>SKILLS</PageTitle>
            <Separator />
            <LanguageContainer key={"prov" + position}>
                <h2>{skills[position].language}</h2>
                <p>{skills[position].description}</p>
                <PercentageBar percentage={skills[position].percentage} />
                {skills[position].correlations.length === 0
                    ? null
                    : skills[position].correlations.map(
                          ({ framework, percentage, description }) => (
                              <FrameworkContainer>
                                  <ListItemContainer>
                                      <ListItem />
                                  </ListItemContainer>
                                  <div>
                                      <h3>{framework}</h3>
                                      <p>{description}</p>
                                      <PercentageBar percentage={percentage} />
                                  </div>
                              </FrameworkContainer>
                          )
                      )}
            </LanguageContainer>
            <button onClick={() => setPosition(position - 1)}>back</button>
            <button onClick={() => setPosition(position + 1)}>next</button>
        </PagesContainer>
    )
}

export default Skills
