import { IAsociatedItemProps } from '../dto/asociated'
import React from 'react'
import { Url } from '../styles/shared'
import { getLinkHref } from '../services/UrlBuilder'
import styled from 'styled-components'

const Li = styled.li`
  margin-top: 5px;
`

const AsociatedItem: React.FC<IAsociatedItemProps> = ({name, id, type}) => {
  return (
    <Li>
      <Url to={getLinkHref(type, id)}>{name}</Url>
    </Li>
  )
}

export default AsociatedItem
