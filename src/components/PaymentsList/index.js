import React, { PureComponent } from "react"
import styled from "styled-components"
import Swipeable from "react-swipeable"
import { colors } from "../../variables"

import MonthList from "./MonthList"
import Ledger from "./Ledger"

const Wrapper = styled.section`
  position: relative;
  padding: 1em 0 0;
  .year {
    position: absolute;
    left: 50%;
    top: -1em;
    padding: 0.5em;
    margin: 0;
    background: ${colors.darkGray};
    border-radius: 4px;
    color: ${colors.light};
    font-size: 0.75em;
    transform: translateX(-50%);
  }
`

export default class PaymentsList extends PureComponent {
  state = {
    x: 0,
    y: 0,
    months: {
      0: "janurary",
      1: "feburary",
      2: "march",
      3: "april",
      4: "may",
      5: "june",
      6: "july",
      7: "august",
      8: "september",
      9: "october",
      10: "november",
      11: "december"
    },
    selectedMonth: new Date().getMonth()
  }

  handleSwiping = (e, deltaX, deltaY) => this.setState({ x: deltaX, y: deltaY })

  handleSwipe = (e, absX) =>
    this.setState(({ selectedMonth, ...state }) => {
      const monthChange =
        selectedMonth < 11 && absX > 0
          ? selectedMonth + 1
          : selectedMonth > 0 && absX < 0 ? selectedMonth - 1 : selectedMonth

      return {
        ...state,
        selectedMonth: monthChange,
        x: 0,
        y: 0
      }
    })

  handleChange = key => {
    this.setState({ selectedMonth: key })
  }

  render = _ => {
    const { state, props } = this
    return (
      <Wrapper>
        <select className="year">
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>
        <Swipeable
          onSwipedLeft={this.handleSwipe}
          onSwipedRight={this.handleSwipe}
          onSwiping={this.handleSwiping}
          delta={25}
        >
          <MonthList
            months={state.months}
            selectedMonth={state.selectedMonth}
            handleChange={this.handleChange}
          />
          <Ledger
            monthlyPayments={props.monthlyPayments}
            monthlyDebits={props.monthlyDebits}
            months={state.months}
            selectedMonth={state.selectedMonth}
            x={state.x}
          />
        </Swipeable>
      </Wrapper>
    )
  }
}
