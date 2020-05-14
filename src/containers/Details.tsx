import { Col, Row } from '../grid'
import { Loader, Tile } from '../styles/shared'

import { DETAILS_IMG_FALLBACK } from '../services/UrlBuilder'
import React from 'react'
import Text from '../components/Text'
import { getRwdParams } from '../helpers/getRwdParams'
import styled from 'styled-components'
import { vars } from '../styles/vars'

const {medium_width, master_padding} = vars

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${master_padding};
`

const Image = styled.img`
  width: 250px;
  min-height: 150px;
  background-image: url(${DETAILS_IMG_FALLBACK});
`

export interface IDetailsProps {
  imageSrc: string
  description: JSX.Element[]
  list: JSX.Element
  isLoading: boolean
}

const rwdParams = getRwdParams([[medium_width, 'width: calc(6 / 12 * 100%);']])

const Details: React.FC<IDetailsProps> = ({isLoading, imageSrc, description, list}) => {
  return (
    <Container>
      {isLoading && <Loader><Text size={'20px'}>Patient you must be...</Text></Loader>}
      <Row>
        <Col size={12} padding={master_padding} rwdParams={rwdParams}>
          <Tile>
            <Image src={imageSrc} alt=''/>
            <Description>
              {description}
            </Description>
          </Tile>
        </Col>
        <Col size={12} padding={master_padding} rwdParams={rwdParams}>
          <Tile>
            {list}
          </Tile>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
