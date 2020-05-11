export type LastItemRef = (node: HTMLDivElement) => void
export type ListType = 'characters' | 'vehicles' | 'planets'

export interface IListItem {
  id: string
  name: string
  url: string
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
