import { Col, Row } from '../grid'
import { getApiUrl, getImageSrc, getLinkHref } from '../services/UrlBuilder'

import Asociated from './Asociated'
import AsociatedItem from '../components/AsociatedItem'
import { IAsociated } from '../dto/asociated'
import { Link } from 'react-router-dom'
import React from 'react'
import Text from '../components/Text'
import { extractPersonData } from '../services/DataExtractor'
import styled from 'styled-components'
import { useDetails } from '../hooks/useDetails'
import { useQuery } from '../hooks/useQuery'

interface IPersonDetailsState {
  name: string
  race: string
  asociated: IAsociated[]
}

const Url = styled(Link)`
  text-decoration: none;
  color: black;
`

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

const Person = () => {
  const {type, id} = useQuery(['type', 'id'])

  const url = getApiUrl(type, id)
  const imageSrc = getImageSrc(type, id)

  const {name, asociated} = useDetails(url, extractPersonData)

  const planet = asociated?.find((item: any) => item.type === 'planets')
  const race = asociated?.find((item: any) => item.type === 'species')

  const asociatedList = asociated?.reduce((a: JSX.Element[], params: IAsociated) => {
    const item = <AsociatedItem key={params.name} {...params}/>
    return params.type === 'planets' || params.type === 'species' ? a : [...a, item]
  }, [])

  const href = getLinkHref(planet?.type, planet?.id)

  return (
    <Container>
      <Row direction={'col'}>
        <Col size={12} padding={'20px'}>
          <Tile>
            <Image src={imageSrc}/>
            <Description>
              <Text type={'h1'}>{name}</Text>
              <Text>race: {race?.name || 'unknown'}</Text>
              <Text>planet: <Url to={href}>{planet?.name}</Url></Text>
            </Description>
          </Tile>
        </Col>
        <Col size={12} padding={'20px'}>
          <Tile>
            <Asociated data={asociatedList} title={'vehicles'}/>
          </Tile>
        </Col>
      </Row>
    </Container>
  )
}

export default Person
