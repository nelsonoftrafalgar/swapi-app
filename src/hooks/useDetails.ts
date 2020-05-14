import { BasicInfo, ExtractAsociates, ExtractData, IData, DetailsKey } from '../dto/details'
import { useEffect, useState } from 'react'

import { getIdFromUrl } from '../helpers/getIdFromUrl'
import { getTypeFromUrl } from '../helpers/getTypeFromUrl'
import { IAction, IActionPayload } from '../dto/store'

export const useDetails = <S>(
  apiUrl: DetailsKey,
  handleData: ExtractData<BasicInfo, IData>,
  dispatch: React.Dispatch<IAction>,
  details: Map<DetailsKey, S>
) => {
  const [state, setState] = useState({} as S)

  const cacheDetais = (payload: IActionPayload<DetailsKey, S>) => {
    dispatch({type: 'CACHE_DETAILS', payload})
  }

  const extracktAsociates: ExtractAsociates<BasicInfo> = (basicInfo) => (info) => {
    const asociated = info.map(({name, url}) => {
      const type = getTypeFromUrl(url)!
      const id = getIdFromUrl(url)

      return {name, type, id}
    })

    const stateValue = {...basicInfo, asociated}
    setState(stateValue as any)

    const payload = {key: apiUrl, value: stateValue}
    cacheDetais(payload as any)
  }

  const getDetails = (url: DetailsKey) => {
    fetch(url)
      .then((response) => response.json())
      .then(handleData(extracktAsociates))
  }

  useEffect(() => {
    if (details.has(apiUrl)) {
      const data = details.get(apiUrl)!
      setState(data)
    } else {
      getDetails(apiUrl)
    }
  }, [])

  return state
}
