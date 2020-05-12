export interface IState {
  lists: Map<any, any>
}

export type ActionType = 'CACHE_LIST'

export interface IAction {
  type: ActionType
  payload: any
}

export interface IStoreContext {
  dispatch: React.Dispatch<IAction>
  store: IState
}