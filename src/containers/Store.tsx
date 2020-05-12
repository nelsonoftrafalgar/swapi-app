import { IAction, IState, IStoreContext } from '../dto/store'
import React, { useReducer } from 'react'

const initialState = {
  lists: new Map()
}

const reducer = (state: IState, {type, payload}: IAction): IState => {
  switch (type) {
    case 'CACHE_LIST':
      const {key, value} = payload
      return {
        ...state,
        lists: state.lists.set(key, value)
      }
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
