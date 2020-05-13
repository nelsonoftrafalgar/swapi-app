import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { vars } from './vars'

const {master_padding} = vars

export const Url = styled(Link)`
  text-decoration: none;
  color: black;
`

export const Tile = styled.div<{withHover?: boolean}>`
  width: 100%;
  min-height: 200px;
  padding: ${master_padding};
  border-radius: 15px;
  background: #ffffff;
  box-shadow:  20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${({withHover}) => withHover ? `&:hover {opacity: .7;}` : ''}
`

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`