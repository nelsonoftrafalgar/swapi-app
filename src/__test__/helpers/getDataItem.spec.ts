import { getDataItem } from '../../helpers/getDataItem'

const testData = [
  {
    next: 'https://swapi.dev/api/people/?page=2',
    results: [
      {
        name: 'testName1',
        url: 'https://swapi.dev/api/planets/1/'
      },
      {
        name: 'testName2',
        url: 'https://swapi.dev/api/people/2/'
      },
      {
        name: 'testName3',
        url: 'https://swapi.dev/api/vehicles/3/'
      }
    ]
  }
]

const testResult = [
  {
    id: '1',
    name: 'testName1',
    url: 'https://swapi.dev/api/planets/1/',
    type: 'planets'
  },
  {
    id: '2',
    name: 'testName2',
    url: 'https://swapi.dev/api/people/2/',
    type: 'people'
  },
  {
    id: '3',
    name: 'testName3',
    url: 'https://swapi.dev/api/vehicles/3/',
    type: 'vehicles'
  }
]

test('getDataItem works', () => {
  expect(testData.reduce(getDataItem, [])).toMatchObject(testResult)
})
