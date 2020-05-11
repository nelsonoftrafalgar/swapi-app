import List from './List'
import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: green;
`

const CHARACTERS_PATHS = ['https://swapi.dev/api/people']
const PLANETS_PATHS = ['https://swapi.dev/api/planets/']
const VEHICLES_PATHS = ['https://swapi.dev/api/vehicles/', 'https://swapi.dev/api/starships/']

const Main = () => {

  const renderCharacters = () => <List paths={CHARACTERS_PATHS}/>
  const renderPlanets = () => <List paths={PLANETS_PATHS}/>
  const renderVehicles = () => <List paths={VEHICLES_PATHS}/>

  return (
    <Container>
      <Route exact={true} path={'/'} render={renderCharacters}/>
      <Route path={'/planets'} render={renderPlanets}/>
      <Route path={'/vehicles'} render={renderVehicles}/>
    </Container>
  )
}

export default Main
