import { useCallback, useEffect, useRef, useState } from 'react'

import { IAction } from '../dto/store'
import { IListState } from '../dto/model'
import { getDataItem } from '../helpers/getDataItem'
import { getNextUrls } from '../helpers/getNextUrls'
import { pluralFetch } from '../helpers/pluralFetch'

export const useList = (paths: string[], lists: Map<any, any>, dispatch: React.Dispatch<IAction>) => {
  const [state, setState] = useState<IListState>({items: [], nexts: []})
  const observer = useRef<IntersectionObserver>()

  const extractListData = (data: any) => {
    const nexts = data.reduce(getNextUrls, [])
    const dataItems = data.reduce(getDataItem, [])

    setState({items: [...state.items, ...dataItems], nexts})
  }

  const getListItems = (urls: string[]) => {
    pluralFetch(urls, extractListData)
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

  return {state, lastItemRef}
}