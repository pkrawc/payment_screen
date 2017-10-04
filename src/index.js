import React from "react"
import ReactDOM from "react-dom"
import { injectGlobal } from "styled-components"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { colors } from "./variables"

injectGlobal`
  @import url("https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css");
  @import url("https://fonts.googleapis.com/css?family=Muli");
  *, *:before, *:after {
    box-sizing: border-box;
  }
  :root {
    font-size: 18px;
    font-family: "Muli", Arial, sans-serif;
    line-height: 1.3334;
  }
  html, body {
    height: 100%;
    width: 100%;
  }
  body {
    position: relative;
    margin: 0;
    padding: 0;
    background-color: ${colors.light};
  }
`

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
