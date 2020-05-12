import { useLocation } from 'react-router-dom'

interface IQuery {
  [key: string]: string
}

export const useQuery = (params: string[]) => {
  const location = useLocation()
  const search = new URLSearchParams(location.search)

  return params.reduce((query: IQuery, param) => {
    query[param] = search.get(param)!
    return query
  }, {})
}
