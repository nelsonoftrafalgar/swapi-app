import { useState, useEffect } from 'react'
import { getTypeFromUrl } from '../helpers/getTypeFromUrl'
import { getIdFromUrl } from '../helpers/getIdFromUrl'

export const useDetails = (apiUrl: string, handleData: any) => {
  const [state, setState] = useState({} as any)

  const extracktAsociates = (basicInfo: any) => (info: any) => {
    const asociated = info.map(({name, url}: any) => {
      const type = getTypeFromUrl(url)!
      const id = getIdFromUrl(url)

      return {name, type, id}
    })

    setState({...basicInfo, asociated})
  }

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then(handleData(extracktAsociates))
  }, [])

  return state
}
