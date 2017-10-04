import React from "react"
import styled from "styled-components"
import numeral from "numeral"
import { colors } from "../variables"

const Wrapper = styled.section`
  display: flex;
  padding: 1em;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  .paid,
  .remaining {
    position: relative;
    width: 50%;
    text-align: center;
    padding-bottom: 0.75em;
    > p {
      margin: 0;
    }
    .title {
      margin-bottom: 0.5em;
      color: ${colors.gray};
      font-size: 0.75em;
    }
  }
  .paid:after,
  .remaining:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 4px;
    width: 1.5em;
    transform: translateX(-50%);
  }
  .paid:after {
    background-color: #4caf50;
  }
  .remaining:after {
    background-color: #ff5722;
  }
  .mdi-dots-vertical {
    font-size: 2em;
    color: ${colors.gray};
    opacity: 0.24;
  }
`

const Due = props => {
  const paid = numeral(props.paid).format("$ 0,0.00")
  const due = numeral(props.remaining).format("$ 0,0.00")
  return (
    <Wrapper>
      <div className="paid">
        <p className="title">PAID</p>
        <p className="amount">{paid}</p>
      </div>
      <span className="mdi mdi-dots-vertical" />
      <div className="remaining">
        <p className="title">REMAINING</p>
        <p className="amount">{due}</p>
      </div>
    </Wrapper>
  )
}

export default Due
