import { useEffect, useState } from 'react'

import { getIdFromUrl } from '../helpers/getIdFromUrl'
import { getTypeFromUrl } from '../helpers/getTypeFromUrl'

export interface IAsociatesInfo {
  name: string
  url: string
}

export const useDetails = (apiUrl: string, handleData: any) => {
  const [state, setState] = useState({} as any)

  const extracktAsociates = (basicInfo: any) => (info: IAsociatesInfo[]) => {
    const asociated = info.map(({name, url}) => {
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
