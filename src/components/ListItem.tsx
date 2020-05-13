import { getImageSrc, getLinkHref } from '../services/UrlBuilder'

import { Col } from '../grid'
import { IListItemProps } from '../dto/list'
import { Link } from 'react-router-dom'
import React from 'react'
import Text from './Text'
import styled from 'styled-components'
import { vars } from '../styles/vars'

const {medium_width, large_width} = vars

const Item = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 20px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow:  20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:hover {
    opacity: .7;
  }
`

const Image = styled.img`
  width: 150px;
  margin-bottom: 10px;
`

const Url = styled(Link)`
  text-decoration: none;
  color: black;
`

const rwdParams = [
  {width: medium_width, content: 'width: calc(4 / 12 * 100%);'},
  {width: large_width, content: 'width: calc(3 / 12 * 100%);'}
]

const ListItem: React.FC<IListItemProps> = ({name, id, lastItemRef, type}) => {
  const imageSrc = getImageSrc(type, id)
  const href = getLinkHref(type, id)

  return (
    <Col size={12} padding={'20px'} rwdParams={rwdParams}>
      <Url to={href}>
        <Item ref={lastItemRef}>
          <Image src={imageSrc}/>
          <Text>{name}</Text>
        </Item>
      </Url>
    </Col>
  )
}

export default React.memo(ListItem)
