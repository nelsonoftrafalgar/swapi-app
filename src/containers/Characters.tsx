import { Col, Row } from '../grid'
import React, { useEffect, useState } from 'react'

import { IListItem } from '../dto/model'
import ListItem from '../components/ListItem'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  background: pink;
`

const Characters = () => {
  const [names, setNames] = useState<IListItem[]>([])

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then(({results}) => {
        const data = results.map(({name, url}: IListItem, id: number) => ({id: (id + 1).toString(), name, url}))
        setNames(data)
      })
  }, [])

  const characters = names.map((name) => <ListItem key={name.name} {...name}/>)

  return (
    <Container>
      <Row direction={'row'}>
        {characters}
      </Row>
    </Container>
  )
}

export default Characters
