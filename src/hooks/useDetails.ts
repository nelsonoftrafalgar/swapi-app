import { BasicInfo, ExtractAsociates, ExtractData, IData } from '../dto/details'
import { useEffect, useState } from 'react'

import { getIdFromUrl } from '../helpers/getIdFromUrl'
import { getTypeFromUrl } from '../helpers/getTypeFromUrl'

export const useDetails = <S>(apiUrl: string, handleData: ExtractData<BasicInfo, IData>) => {
  const [state, setState] = useState({} as S)

  const extracktAsociates: ExtractAsociates<BasicInfo> = (basicInfo) => (info) => {
    const asociated = info.map(({name, url}) => {
      const type = getTypeFromUrl(url)!
      const id = getIdFromUrl(url)

      return {name, type, id}
    })

    setState({...basicInfo, asociated} as any)
  }

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then(handleData(extracktAsociates))
  }, [])

  return state
}
