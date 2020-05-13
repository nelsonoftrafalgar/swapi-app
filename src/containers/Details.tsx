import { Col, Row } from '../grid'

import React from 'react'
import Text from '../components/Text'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: orange;
  position: relative;
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

const Description = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

const Image = styled.img`
  width: 250px;
`

const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IDetailsProps {
  imageSrc: string
  description: JSX.Element[]
  list: JSX.Element
  isLoading: boolean
}

const Details: React.FC<IDetailsProps> = ({isLoading, imageSrc, description, list}) => {
  return (
    <Container>
      {isLoading && <Loader><Text size={'20px'}>Loading...</Text></Loader>}
      <Row direction={'col'}>
        <Col size={12} padding={'20px'}>
          <Tile>
            <Image src={imageSrc}/>
            <Description>
              {description}
            </Description>
          </Tile>
        </Col>
        <Col size={12} padding={'20px'}>
          <Tile>
            {list}
          </Tile>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
