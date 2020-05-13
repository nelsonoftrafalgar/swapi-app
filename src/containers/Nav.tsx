import React from 'react'
import Text from '../components/Text'
import { Url } from '../styles/shared'
import { breakpoint } from '../styles/breakpoint'
import styled from 'styled-components'
import { vars } from '../styles/vars'

const {medium_width, nav_border} = vars

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  border-bottom: ${nav_border};

  ${breakpoint({width: medium_width, content: `
    height: 100vh;
    border-right: ${nav_border};
    border-bottom: none;
  `})}
`

const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
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

const Nav = () => {
  return (
    <Container>
      <List>
        <Item>
          <Url to={'/'}>
            <Text>Characters</Text>
          </Url>
        </Item>
        <Item>
          <Url to={'/vehicles'}>
            <Text>Vehicles</Text>
          </Url>
        </Item>
        <Item>
          <Url to={'/planets'}>
            <Text>Planets</Text>
          </Url>
        </Item>
      </List>
    </Container>
  )
}

export default Nav
