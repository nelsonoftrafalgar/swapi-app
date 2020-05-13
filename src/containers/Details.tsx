import { Col, Row } from '../grid'

import React from 'react'
import Text from '../components/Text'
import styled from 'styled-components'
import { vars } from '../styles/vars'

const {medium_width} = vars

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const Tile = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow:  20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Description = styled.div`
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

const rwdParams = [
  {width: medium_width, content: 'width: calc(6 / 12 * 100%);'},
]

const Details: React.FC<IDetailsProps> = ({isLoading, imageSrc, description, list}) => {
  return (
    <Container>
      {isLoading && <Loader><Text size={'20px'}>Patient you must be...</Text></Loader>}
      <Row>
        <Col size={12} padding={'20px'} rwdParams={rwdParams}>
          <Tile>
            <Image src={imageSrc}/>
            <Description>
              {description}
            </Description>
          </Tile>
        </Col>
        <Col size={12} padding={'20px'} rwdParams={rwdParams}>
          <Tile>
            {list}
          </Tile>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
