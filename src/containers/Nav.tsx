import { Link } from 'react-router-dom'
import React from 'react'
import { breakpoint } from '../styles/breakpoint'
import styled from 'styled-components'
import { vars } from '../styles/vars'

const {medium_width} = vars

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  border-bottom: 5px solid #b21515;

  ${breakpoint({width: medium_width, content: `
    height: 100vh;
    border-right: 5px solid #b21515;
    border-bottom: none;
  `})}
`

const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 0px;
  list-style-type: none;
  ${breakpoint({width: medium_width, content: `
    display: block;
    width: auto;
    margin-top: 20px;
  `})}
`

const Item = styled.li`
  margin-bottom: 10px;
  display: inline-block;
  ${breakpoint({width: medium_width, content: 'display: block'})}
`

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: black;
  font-family: sans-serif;
`

const Nav = () => {
  return (
    <Container>
      <List>
        <Item><StyledLink to={'/'}>Characters</StyledLink></Item>
        <Item><StyledLink to={'/vehicles'}>Vehicles</StyledLink></Item>
        <Item><StyledLink to={'/planets'}>Planets</StyledLink></Item>
      </List>
    </Container>
  )
}

export default Nav
