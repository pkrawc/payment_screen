import React, { Component } from "react"
import styled from "styled-components"
import Header from "./components/Header"
import PayNowCard from "./components/PayNowCard"
import Due from "./components/Due"
import PaymentsList from "./components/PaymentsList"

const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <PayNowCard name="Maria Smith" cardNumber="**** **** **** 1233" />
        <Due paid={3200.0} remaining={1400.0} />
        <PaymentsList
          monthlyPayments={[
            {
              dateScheduled: new Date(),
              amount: 1000.0,
              successful: false,
              id: 1,
              payer: "Janet Wood"
            },
            {
              dateScheduled: new Date(),
              amount: 400.0,
              successful: true,
              id: 2,
              payer: "Janet Wood"
            },
            {
              dateScheduled: new Date(2017, 9),
              amount: 600.0,
              successful: true,
              id: 3,
              payer: "Chrissy Snow"
            },
            {
              dateScheduled: new Date(2017, 7),
              amount: 1200.0,
              successful: true,
              id: 4,
              payer: "Chrissy Snow"
            },
            {
              dateScheduled: new Date(2017, 6),
              amount: 730.0,
              successful: false,
              id: 5,
              payer: "Janet Wood"
            },
            {
              dateScheduled: new Date(2017, 3),
              amount: 56.0,
              successful: true,
              id: 6,
              payer: "Janet Wood"
            },
            {
              dateScheduled: new Date(2017, 3),
              amount: 731.0,
              successful: true,
              id: 7,
              payer: "Chrissy Snow"
            },
            {
              dateScheduled: new Date(2017, 6),
              amount: 899.0,
              successful: false,
              id: 8,
              payer: "Chrissy Snow"
            },
            {
              dateScheduled: new Date(2017, 3),
              amount: 1309.0,
              successful: true,
              id: 9,
              payer: "Chrissy Snow"
            },
            {
              dateScheduled: new Date(2017, 3),
              amount: 123.0,
              successful: true,
              id: 10,
              payer: "Janet Wood"
            }
          ]}
        />
      </Wrapper>
    )
  }
}

export default App
