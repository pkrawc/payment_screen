import React from "react"
import styled from "styled-components"
import numeral from "numeral"
import { colors } from "../../variables"

const Wrapper = styled.ul`
  margin: 1em;
  padding: 1em;
  background: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
  list-style: none;
  transform: translateX(${({ x }) => x * -1 / 5}px);
  will-change: transform;
  transition: 200ms;
  .empty {
    margin: 3em 0;
    text-align: center;
    color: ${colors.darkGray};
  }
`

const Ledger = props => {
  const filteredPayments = props.monthlyPayments.filter(
    p => p.dateScheduled.getMonth() === props.selectedMonth
  )
  return (
    <Wrapper x={props.x}>
      {filteredPayments.length ? (
        filteredPayments.map(
          ({
            id,
            dateScheduled,
            amount,
            successful = false,
            payer = "Jason Bateman"
          }) => (
            <Payment key={id}>
              <span className="avatar" />
              <p className="payment_info">
                {payer}
                <span className="date_scheduled">
                  {`${props.months[
                    dateScheduled.getMonth()
                  ]} ${dateScheduled.getDate()}`}
                </span>
              </p>
              <p className="amount_scheduled">
                {numeral(amount).format("0,0.00")}
              </p>
              <span
                className={`status ${successful ? "success" : "warning"}`}
              />
            </Payment>
          )
        )
      ) : (
        <p className="empty">Your ledger is empty for this month.</p>
      )}
    </Wrapper>
  )
}

export default Ledger

const Payment = styled.li`
  display: flex;
  align-items: center;
  transition: 200ms;
  &:not(:last-of-type) {
    margin-bottom: 1em;
  }
  .avatar {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: ${colors.gray};
    margin-right: 1em;
  }
  .payment_info,
  .amount_scheduled {
    margin: 0;
  }
  .payment_info {
    flex: 1;
    .date_scheduled {
      display: block;
      font-size: 0.75em;
      text-transform: uppercase;
      color: ${colors.gray};
    }
  }
  .amount_scheduled:before {
    content: "$";
    display: inline-block;
    margin-right: 0.25em;
    color: ${colors.gray};
    vertical-align: top;
    transform: rotate(-11.25deg);
    font-size: 0.75em;
  }
  .status {
    width: 0.25em;
    height: 1rem;
    margin-left: 0.5em;
    &.warning {
      background: #ff5722;
    }
    &.success {
      background: #4caf50;
    }
  }
`
