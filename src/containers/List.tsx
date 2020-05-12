import { IListProps, IListState } from '../dto/model'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import ListItem from '../components/ListItem'
import { Row } from '../grid'
import { StoreContext } from './Store'
import { getDataItem } from '../helpers/getDataItem'
import { getNextUrls } from '../helpers/getNextUrls'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: pink;
`

const List: React.FC<IListProps> = ({paths}) => {
  const {dispatch, store: {lists}} = useContext(StoreContext)
  const [state, setState] = useState<IListState>({items: [], nexts: []})
  const observer = useRef<IntersectionObserver>()

  const getListItems = (urls: string[]) => {
    Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
      .then((data) => {
        const nexts = data.reduce(getNextUrls, [])
        const dataItems = data.reduce(getDataItem, [])

        setState({items: [...state.items, ...dataItems], nexts})
      })
  }

  const cacheItems = () => {
    dispatch({type: 'CACHE_LIST', payload: {key: paths, value: state}})
  }

  useEffect(() => {
    if (lists.has(paths)) {
      const {items, nexts} = lists.get(paths)
      setState({items, nexts})
    } else {
      getListItems(paths)
    }
  }, [])

  useEffect(() => {
    cacheItems()
  }, [state.items.length])

  const lastItemRef = useCallback((node) => {
    if (observer.current) { observer.current.disconnect() }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && state.nexts.length) {
        getListItems(state.nexts)
      }
    }, {threshold: 0.25})

    if (node) { observer.current.observe(node) }

  }, [state.nexts[0]])

  const renderItems = state.items.map((item, i) => {
    const ref = state.items.length === i + 1 ? lastItemRef : undefined
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
