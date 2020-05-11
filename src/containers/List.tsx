import { IListItem, IListProps } from '../dto/model'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import ListItem from '../components/ListItem'
import { Row } from '../grid'
import { getDataItem } from '../helpers/getDataItem'
import { getNextUrls } from '../helpers/getNextUrls'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: pink;
`

const List: React.FC<IListProps> = ({paths}) => {
  const [items, setItems] = useState<IListItem[]>([])
  const [nextPages, setNextPages] = useState<string[]>([''])
  const observer = useRef<IntersectionObserver>()

  const getListItems = (urls: string[]) => {
    Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
      .then((data) => {
        const nexts = data.reduce(getNextUrls, [])
        const dataItems = data.reduce(getDataItem, [])

        setItems([...items, ...dataItems])
        setNextPages(nexts)
      })
  }

  useEffect(() => {
    getListItems(paths)
  }, [])

  const lastItemRef = useCallback((node) => {
    if (observer.current) { observer.current.disconnect() }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && nextPages.length) {
        getListItems(nextPages)
      }
    }, {threshold: 0.25})

    if (node) { observer.current.observe(node) }

  }, [nextPages[0]])

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
