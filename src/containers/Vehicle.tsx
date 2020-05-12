import { Col, Row } from '../grid'
import { getApiUrl, getImageSrc } from '../services/UrlBuilder'

import Asociated from './Asociated'
import AsociatedItem from '../components/AsociatedItem'
import { IAsociated } from '../dto/asociated'
import React from 'react'
import Text from '../components/Text'
import { extractVehicleData } from '../services/DataExtractor'
import styled from 'styled-components'
import { useDetails } from '../hooks/useDetails'
import { useQuery } from '../hooks/useQuery'

interface IVehicleDetailsState {
  name: string
  vehicleClass: string
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

const Vehicle = () => {
  const {type, id} = useQuery(['type', 'id'])
  const url = getApiUrl(type, id)
  const imageSrc = getImageSrc(type, id)

  const {name, vehicleClass, asociated} = useDetails(url, extractVehicleData)

  const asociatedList = asociated?.map((params: IAsociated) => {
    return <AsociatedItem key={params.name} {...params}/>
  })

  return (
    <Container>
      <Row direction={'col'}>
        <Col size={12} padding={'20px'}>
          <Tile>
            <Image src={imageSrc}/>
            <Description>
              <Text type={'h1'}>{name}</Text>
              <Text>class: {vehicleClass}</Text>
            </Description>
          </Tile>
        </Col>
        <Col size={12} padding={'20px'}>
          <Tile>
            <Asociated data={asociatedList} title={'people'}/>
          </Tile>
        </Col>
      </Row>
    </Container>
  )
}

export default Vehicle
