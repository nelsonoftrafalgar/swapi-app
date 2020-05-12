import { Link } from 'react-router-dom'
import React from 'react'
import { getLinkHref } from '../services/UrlBuilder'
import styled from 'styled-components'

const Url = styled(Link)`
  text-decoration: none;
  color: black;
`

interface IAsociatedItemProps {
  name: string
  id: string
  type: string
}

const AsociatedItem: React.FC<IAsociatedItemProps> = ({name, id, type}) => {
  return (
    <li>
      <Url to={getLinkHref(type, id)}>{name}</Url>
    </li>
  )
}

export default AsociatedItem
