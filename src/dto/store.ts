import { IListState } from './list'

export interface IState {
  lists: Map<string[], IListState>
}

export type ActionType = 'CACHE_LIST'

interface IActionPayload {
  key: string[]
  value: IListState
}

export interface IAction {
  type: ActionType
  payload: IActionPayload
}

export interface IStoreContext {
  dispatch: React.Dispatch<IAction>
  store: IState
}