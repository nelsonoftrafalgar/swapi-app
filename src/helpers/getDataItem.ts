import { IListData, IListItem, IResult, ListType } from '../dto/list'

import { getIdFromUrl } from './getIdFromUrl'
import { getTypeFromUrl } from './getTypeFromUrl'

export const getDataItem = (a: IListItem[], {results}: IListData) => {
  const value = results.map(({name, url}: IResult) => {
    const id = getIdFromUrl(url)
    const type = getTypeFromUrl(url) as ListType
    return {id, name, url, type}
  })

  return [...a, ...value]
}
