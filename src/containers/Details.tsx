import { Col, Row } from '../grid'

import React from 'react'
import styled from 'styled-components'

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

interface IDetailsProps {
  imageSrc: string
  description: JSX.Element[]
  list: JSX.Element
}

const Details: React.FC<IDetailsProps> = ({imageSrc, description, list}) => {
  return (
    <Container>
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
