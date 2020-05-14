import { IPlanetDetailsState } from '../../dto/details'
import { extractPlanetData } from '../../services/DataExtractor'
import { renderHook } from '@testing-library/react-hooks'
import { useDetails } from '../../hooks/useDetails'

const apiUrl = 'mockUrl'
const mockDetails = new Map()
const mockDispatch = jest.fn(() => null)
const mockHandler = jest.fn(extractPlanetData)

const name = 'testName'
const population = 'testPopultaion'
const asociatesName = 'mockName1'

const basicData = {
  name,
  population,
  residents: ['']
}

const asociatesData = [
  {name: asociatesName, url: 'mock/people/4'}
]

const currentState = {
  name,
  population,
  asociated: [
    {id: '4', name: asociatesName, type: 'people'}
  ]
}

const mockAction = {
  payload: {
    key: apiUrl,
    value: currentState
  },
  type: 'CACHE_DETAILS'
}

jest.spyOn(Promise, 'all').mockImplementation(() => Promise.resolve(asociatesData))
const mockFetch = Promise.resolve({json: () => Promise.resolve(basicData)})

// @ts-ignore
global.fetch = jest.fn().mockImplementation(() => mockFetch)

beforeEach(() => {
  jest.clearAllMocks()
})

test('useDetails fetches data if item is not in store', async () => {
  const {
    result,
    waitForNextUpdate
  } = renderHook(() => useDetails<IPlanetDetailsState>(apiUrl, mockHandler, mockDispatch, mockDetails))

  await waitForNextUpdate()

  expect(result.current).toMatchObject(currentState)
  expect(mockHandler).toHaveBeenCalledTimes(1)
  expect(mockDispatch).toHaveBeenCalledWith(mockAction)
})

const populatedStore = new Map()
populatedStore.set(apiUrl, currentState)

test('useDetails uses data from store without fetching', () => {
  const {result} = renderHook(() => useDetails<IPlanetDetailsState>(apiUrl, mockHandler, mockDispatch, populatedStore))

  expect(result.current).toMatchObject(currentState)
  expect(mockHandler).not.toHaveBeenCalled()
  expect(mockDispatch).not.toHaveBeenCalled()
})
