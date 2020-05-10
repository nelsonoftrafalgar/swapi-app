import { Col, Row } from './grid'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Main from './containers/Main'
import Nav from './containers/Nav'
import React from 'react'
import { vars } from './styles/vars'

const {medium_width} = vars

const StyleReset = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}`

const Container = styled.div`
  max-width: 100%;
  /* height: 100vh; */
`

const rowRwdParams = [
  {width: medium_width, content: 'flex-direction: row;'}
]

const navRwdParams = [
  {width: medium_width, content: `width: calc(2 / 12 * 100%);`}
]

const mainRwdParams = [
  {width: medium_width, content: `width: calc(10 / 12 * 100%);`}
]

const App = () => {
  return (
    <>
      <StyleReset />
      <Container>
        <Router>
          <Switch>
            <Row rwdParams={rowRwdParams}>
              <Col size={12} rwdParams={navRwdParams}>
                <Nav/>
              </Col>
              <Col size={12} rwdParams={mainRwdParams}>
                <Main/>
              </Col>
            </Row>
          </Switch>
        </Router>
      </Container>
    </>
  )
}

export default App
