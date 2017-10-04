import React from "react"
import styled from "styled-components"
import { colors } from "../../variables"

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 1em 0 1em;
  padding: 0 1em;
  align-items: baseline;
  width: 100%;
  @media (min-width: 540px) {
    justify-content: space-between;
  }
  label {
    font-size: 0.75em;
    color: ${colors.darkGray};
    text-align: center;
    text-transform: uppercase;
    transition: 200ms;
    cursor: default;
    outline: none;
    flex: 1 0 33.33%;
    @media (min-width: 540px) {
      flex: initial;
    }
  }
  input:checked + span {
    font-size: 1rem;
    color: ${colors.dark};
  }
  input[type="radio"] {
    display: none;
  }
`

const MonthList = props => (
  <Wrapper>
    {Object.keys(props.months)
      .filter(key => {
        if (window.innerWidth > 540) return key
        else if (
          parseInt(key, 10) === props.selectedMonth ||
          parseInt(key, 10) === props.selectedMonth + 1 ||
          parseInt(key, 10) === props.selectedMonth - 1
        )
          return key
        else return null
      })
      .map(key => (
        <label key={key}>
          <input
            name="month_selector"
            type="radio"
            value={key}
            checked={props.selectedMonth === parseInt(key, 10)}
            onChange={e => props.handleChange(parseInt(key, 10))}
          />
          <span>{props.months[key]}</span>
        </label>
      ))}
  </Wrapper>
)

export default MonthList
