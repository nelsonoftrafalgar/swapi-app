import { IAsociatedItemProps } from '../dto/asociated'
import { Link } from 'react-router-dom'
import React from 'react'
import { getLinkHref } from '../services/UrlBuilder'
import styled from 'styled-components'

const Url = styled(Link)`
  text-decoration: none;
  color: black;
`

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
