import React from "react"
import { PagesContainer, Separator, PageTitle } from "../commons/styled"
import { colors } from "../commons/colors"
import styled, { keyframes } from "styled-components"
import { skills } from "../data"

const LanguageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const LanguageContainerItem = styled.div`
    flex-basis: 50%;
    padding: 20px;
    box-sizing: border-box;
`

const FrameworkContainer = styled.div`
    display: flex;
`
const PercentageBar = styled.div`
    width: ${props => 100 - props.percentage}%;
    background-color: ${colors.DARKGREY};
    height: 100%;
    float: right;
    animation: ${props => PercentageAnimation(props.percentage)} 2000ms;
`

const ListItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`
const ListItem = styled.div`
    background-color: ${colors.GREEN};
    height: 15px;
    width: 15px;
`

const PercentageAnimation = percentage => keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: ${100 - percentage}%;
 }`

const PercentageBarContainer = styled.div`
    background-image: linear-gradient(to right, red, yellow, green);
    height: 4px;
`

const Skills = props => {
    return (
        <PagesContainer backgroundColor="yellow" padding={true}>
            <PageTitle>SKILLS</PageTitle>
            <Separator />
            <LanguageContainer>
                {skills.map(item => (
                    <LanguageContainerItem>
                        <h2>{item.language}</h2>
                        <p>{item.description}</p>
                        <PercentageBarContainer>
                            <PercentageBar percentage={item.percentage} />
                        </PercentageBarContainer>
                        {item.correlations.length === 0
                            ? null
                            : item.correlations.map(
                                  ({ framework, percentage, description }) => (
                                      <FrameworkContainer>
                                          <ListItemContainer>
                                              <ListItem />
                                          </ListItemContainer>
                                          <div>
                                              <h3>{framework}</h3>
                                              <p>{description}</p>
                                              <PercentageBarContainer>
                                                  <PercentageBar
                                                      percentage={percentage}
                                                  />
                                              </PercentageBarContainer>
                                          </div>
                                      </FrameworkContainer>
                                  )
                              )}
                    </LanguageContainerItem>
                ))}
            </LanguageContainer>
        </PagesContainer>
    )
}

export default Skills
