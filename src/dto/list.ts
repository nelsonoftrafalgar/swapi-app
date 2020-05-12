export type LastItemRef = (node: HTMLDivElement) => void
export type ListType = 'people' | 'vehicles' | 'planets'

export interface IListItem {
  id: string
  name: string
  url: string
  type: ListType
}

export interface IListItemProps {
  id: string
  name: string
  lastItemRef: LastItemRef | undefined
  type: ListType
}

export interface IListProps {
  paths: string[]
}

export interface IListState {
  items: IListItem[]
  nexts: string[]
}

export interface IResult {
  name: string
  url: string
}

export interface IListData {
  next: string
  results: IResult[]
}
