import { getIdFromUrl } from '../../helpers/getIdFromUrl'

const url1 = 'https://swapi.dev/api/planets/1/'
const url2 = 'https://swapi.dev/api/people/2/'
const url3 = 'https://swapi.dev/api/vehicles/3/'

test('getIdFromUrl works', () => {
  expect(getIdFromUrl(url1)).toEqual('1')
  expect(getIdFromUrl(url2)).toEqual('2')
  expect(getIdFromUrl(url3)).toEqual('3')
})
