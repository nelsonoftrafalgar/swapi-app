import { getTypeFromUrl } from '../../helpers/getTypeFromUrl'

const url1 = 'https://swapi.dev/api/planets/1/'
const url2 = 'https://swapi.dev/api/people/2/'
const url3 = 'https://swapi.dev/api/vehicles/3/'

test('getTypeFromUrl works', () => {
  expect(getTypeFromUrl(url1)).toEqual('planets')
  expect(getTypeFromUrl(url2)).toEqual('people')
  expect(getTypeFromUrl(url3)).toEqual('vehicles')
})
