import { IAsociatedProps } from '../dto/asociated'
import React from 'react'
import Text from '../components/Text'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style-type: none;
`

const Asociated: React.FC<IAsociatedProps> = ({title, data}) => {
  return (
    <>
      <Text type={'h2'} size={'20px'}>Asociated {title}</Text>
      {data?.length
        ? <Ul>
            {data}
          </Ul>
        : <Text>unknown</Text>
      }
    </>
  )
}

export default Asociated
