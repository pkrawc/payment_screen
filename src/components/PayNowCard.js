import React from "react"
import styled from "styled-components"
import masterCard from "../mastercard_logo.svg"
import { colors } from "../variables"

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 1em;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.24);
  background-color: #4c73fd;
  background-image: linear-gradient(90deg, #4c73fd 0%, #3f51b5 100%);
  color: ${colors.light};
  transition: 200ms;
  img {
    display: block;
    max-width: 5em;
    height: 2em;
    margin: 1em 0 1em 1em;
  }
  .info {
    margin: 1em auto 1em 1em;
  }
  .name,
  .card_number {
    margin: 0;
  }
  .mdi-menu-down {
    color: ${colors.yellow};

    &:before {
      vertical-align: top;
    }
  }
  .card_number {
    font-size: 0.75em;
  }
  .pay_now_button {
    display: block;
    padding: 2em;
    align-self: stretch;
    background-color: rgba(255, 255, 255, 0.12);
    border: none;
    cursor: pointer;
    outline: none;
    transition: 200ms;
    &:hover {
      background-color: rgba(255, 255, 255, 0.24);
    }
  }
  .mdi-arrow-right {
    color: ${colors.light};
    font-size: 2em;
  }
`

const PayNowCard = props => (
  <Wrapper>
    <img src={masterCard} alt="mastercard logo" />
    <div className="info">
      <p className="name">
        {props.name} <span className="mdi mdi-menu-down" />
      </p>
      <p className="card_number">{props.cardNumber}</p>
    </div>
    <button className="pay_now_button">
      <span className="mdi mdi-arrow-right" />
    </button>
  </Wrapper>
)

export default PayNowCard
