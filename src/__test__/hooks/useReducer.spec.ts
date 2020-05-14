import { act, renderHook } from '@testing-library/react-hooks'
import { initialState, reducer } from '../../containers/Store'

import { IListState } from '../../dto/list'
import { IPersonDetailsState } from '../../dto/details'
import { IState } from '../../dto/store'
import { useReducer } from 'react'

const mockListKey = ['mockListKey']
const mockDetailsKey = 'mockDetailsKey'

const mockListState: IListState = {
  nexts: ['mockNexts'],
  items: [
    {
      id: 'testId',
      name: 'testName',
      url: 'testUrl',
      type: 'people'
    }
  ]
}

const mockDetailsState: IPersonDetailsState = {
  name: 'testName2',
  race: 'testRace',
  asociated: []
}

const setup = (state: IState) => renderHook(() => useReducer(reducer, state))

test('CACHE_LIST action updates store', () => {
  const { result } = setup(initialState)
  const [, dispatch] = result.current

  const emptyState = result.current[0].lists.size
  expect(emptyState).toEqual(0)

  act(() => dispatch({type: 'CACHE_LIST', payload: {key: mockListKey, value: mockListState}}))

  const value = result.current[0].lists.get(mockListKey)
  expect(value).toMatchObject(mockListState)
})

test('CACHE_DETAILS action updates store', () => {
  const { result } = setup(initialState)
  const [, dispatch] = result.current

  const emptyState = result.current[0].details.size
  expect(emptyState).toEqual(0)

  act(() => dispatch({type: 'CACHE_DETAILS', payload: {key: mockDetailsKey, value: mockDetailsState}}))

  const value = result.current[0].details.get(mockDetailsKey)
  expect(value).toMatchObject(mockDetailsState)
})
