import { IListItem } from '../dto/model'
import { getIdFromUrl } from './getIdFromUrl'
import { getTypeFromUrl } from './getTypeFromUrl'

export const getDataItem = (a: IListItem[], {results}: any) => {
  const value = results.map(({name, url}: IListItem) => {
    const id = getIdFromUrl(url)
    const type = getTypeFromUrl(url)
    return {id, name, url, type}
  })

  return [...a, ...value]
}
