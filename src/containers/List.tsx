import React, { useContext } from 'react'

import { IListProps } from '../dto/model'
import ListItem from '../components/ListItem'
import { Row } from '../grid'
import { StoreContext } from './Store'
import styled from 'styled-components'
import { useList } from '../hooks/useList'

const Container = styled.div`
  width: 100%;
  background: pink;
`

const List: React.FC<IListProps> = ({paths}) => {
  const {dispatch, store: {lists}} = useContext(StoreContext)
  const {state: {items}, lastItemRef} = useList(paths, lists, dispatch)

  const renderItems = items.map((item, i) => {
    const ref = items.length === i + 1 ? lastItemRef : undefined
    return <ListItem lastItemRef={ref} key={item.name} {...item}/>
  })

  return (
    <Container>
      <Row direction={'row'}>
        {renderItems}
      </Row>
    </Container>
  )
}

export default List
