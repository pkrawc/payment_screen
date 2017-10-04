import React from "react"
import styled from "styled-components"

const Wrapper = styled.header`
  display: flex;
  padding: 1em;
  align-items: center;
  .title {
    margin: 0 auto;
    color: #2c3e50;
  }
  .mdi {
    font-size: 1.25em;
    color: #95a5a6;
  }
`

const Header = props => (
  <Wrapper>
    <span className="menu_button mdi mdi-menu" />
    <p className="title">Payments</p>
    <span className="notifications mdi mdi-bell" />
  </Wrapper>
)

export default Header
