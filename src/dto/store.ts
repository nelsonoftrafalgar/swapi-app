import { IListState, ListsKey } from './list'
import { DetailsState, DetailsKey } from './details'

export interface IState {
  lists: Map<ListsKey, IListState>
  details: Map<DetailsKey, DetailsState>
}

export type ActionType = 'CACHE_LIST' | 'CACHE_DETAILS'

export interface IActionPayload<K, V> {
  key: K
  value: V
}

export interface IAction {
  type: ActionType
  payload: IActionPayload<any, any>
}

export interface IStoreContext {
  dispatch: React.Dispatch<IAction>
  store: IState
}
