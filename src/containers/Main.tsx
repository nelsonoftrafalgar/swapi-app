import { CHARACTERS_PATHS, PLANETS_PATHS, VEHICLES_PATHS } from '../services/UrlBuilder'

import List from './List'
import Person from './Person'
import Planet from './Planet'
import React from 'react'
import { Route } from 'react-router-dom'
import Vehicle from './Vehicle'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const Main = () => {

  const renderCharacters = () => <List paths={CHARACTERS_PATHS}/>
  const renderPlanets = () => <List paths={PLANETS_PATHS}/>
  const renderVehicles = () => <List paths={VEHICLES_PATHS}/>

  return (
    <Container>
      <Route exact={true} path={'/'} render={renderCharacters}/>
      <Route path={'/planets'} render={renderPlanets}/>
      <Route path={'/vehicles'} render={renderVehicles}/>
      <Route path={'/details/people'} component={Person}/>
      <Route path={'/details/planets'} component={Planet}/>
      <Route path={['/details/vehicles', '/details/starships']} component={Vehicle}/>
    </Container>
  )
}

export default Main
