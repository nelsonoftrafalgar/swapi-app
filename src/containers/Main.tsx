import Characters from './Characters'
import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  background: green;
`

const Main = () => {
  return (
    <Container>
      <Route exact={true} path={'/'} component={Characters}/>
    </Container>
  )
}

export default Main
