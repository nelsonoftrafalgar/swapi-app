import { IAction, IState, IStoreContext, IActionPayload } from '../dto/store'
import React, { useReducer } from 'react'
import { IListState, ListsKey } from '../dto/list'
import { DetailsState, DetailsKey } from '../dto/details'

const initialState: IState = {
  lists: new Map(),
  details: new Map()
}

const listsReducer = (state: IState, {key, value}: IActionPayload<ListsKey, IListState>) => {
  return {...state, lists: state.lists.set(key, value)}
}

const detailsReducer = (state: IState, {key, value}: IActionPayload<DetailsKey, DetailsState>) => {
  return {...state, details: state.details.set(key, value)}
}

const reducer = (state: IState, {type, payload}: IAction): IState => {
  switch (type) {
    case 'CACHE_LIST':
      return listsReducer(state, payload)
    case 'CACHE_DETAILS':
      return detailsReducer(state, payload)
    default:
      return state
  }
}

export const StoreContext = React.createContext({} as IStoreContext)

const Store: React.FC = ({children}) => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const contextValue = {store, dispatch}

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store
