import { Col, Row } from '../grid'
import { getApiUrl, getImageSrc } from '../services/UrlBuilder'

import AsociatedItem from '../components/AsociatedItem'
import React from 'react'
import { extractPlanetData } from '../services/DataExtractor'
import styled from 'styled-components'
import { useDetails } from '../hooks/useDetails'
import { useQuery } from '../hooks/useQuery'

interface IAsociated {
  name: string
  type: string
  id: string
}

interface IPlanetDetailsState {
  name: string
  population: string
  asociated: IAsociated[]
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: orange;
`

const Tile = styled.div`
  width: 100%;
  border-radius: 5px;
  background: white;
  padding: 20px;
  box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Image = styled.img`
  width: 250px;
`

const Description = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

const Planet = () => {
  const {type, id} = useQuery(['type', 'id'])
  const url = getApiUrl(type, id)
  const imageSrc = getImageSrc(type, id)

  const {name, population, asociated} = useDetails(url, extractPlanetData)

  const people = asociated?.map((params: IAsociated) => {
    return <AsociatedItem key={params.name} {...params}/>
  })

  return (
    <Container>
      <Row direction={'col'}>
        <Col size={12} padding={'20px'}>
          <Tile>
            <Image src={imageSrc}/>
            <Description>
              <h1>{name}</h1>
              <p>population: {population}</p>
            </Description>
          </Tile>
        </Col>
        <Col size={12} padding={'20px'}>
          <Tile>
            <h2>Asociated people</h2>
            <ul>
              {people}
            </ul>
          </Tile>
        </Col>
      </Row>
    </Container>
  )
}

export default Planet
