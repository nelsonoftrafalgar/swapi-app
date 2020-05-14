import { Tile, Url } from '../styles/shared'
import { getImageSrc, getLinkHref } from '../services/UrlBuilder'

import { Col } from '../grid'
import { IListItemProps } from '../dto/list'
import React from 'react'
import Text from './Text'
import { getRwdParams } from '../helpers/getRwdParams'
import styled from 'styled-components'
import { vars } from '../styles/vars'

const {medium_width, large_width, master_padding} = vars

const Image = styled.img`
  width: 150px;
  min-height: 100px;
  margin-bottom: 10px;
  background-image: url(${'https://via.placeholder.com/150x100.png?text=No+image'});
`

const rwdParams = getRwdParams([
  [medium_width, 'width: calc(4 / 12 * 100%);'],
  [large_width, 'width: calc(3 / 12 * 100%);']
])

const ListItem: React.FC<IListItemProps> = ({name, id, lastItemRef, type}) => {
  const imageSrc = getImageSrc(type, id)
  const href = getLinkHref(type, id)

  return (
    <Col size={12} padding={master_padding} rwdParams={rwdParams}>
      <Url to={href}>
        <Tile withHover={true} ref={lastItemRef}>
          <Image src={imageSrc} alt=''/>
          <Text>{name}</Text>
        </Tile>
      </Url>
    </Col>
  )
}

export default React.memo(ListItem)
