import React, { useContext } from 'react'

import { IListProps } from '../dto/list'
import ListItem from '../components/ListItem'
import { Row } from '../grid'
import { StoreContext } from './Store'
import Text from '../components/Text'
import styled from 'styled-components'
import { useList } from '../hooks/useList'
import { useLoader } from '../hooks/useLoader'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: scroll;
  scrollbar-width: none;
`

const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const List: React.FC<IListProps> = ({paths}) => {
  const {dispatch, store: {lists}} = useContext(StoreContext)
  const {state: {items}, lastItemRef} = useList(paths, lists, dispatch)
  const {isLoading} = useLoader(items)

  const renderItems = items.map((item, i) => {
    const ref = items.length === i + 1 ? lastItemRef : undefined
    return <ListItem lastItemRef={ref} key={item.name} {...item}/>
  })

  return (
    <Container>
      {isLoading && <Loader><Text size={'20px'}>Patient you must be...</Text></Loader>}
      <Row direction={'row'}>
        {renderItems}
      </Row>
    </Container>
  )
}

export default List
