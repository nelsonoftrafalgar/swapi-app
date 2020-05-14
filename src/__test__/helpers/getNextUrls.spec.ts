import { getNextUrls } from '../../helpers/getNextUrls'

const testData = [
  {
    next: 'next Url 1',
    results: [{name: '', url: ''}]
  },
  {
    next: '',
    results: [{name: '', url: ''}]
  },
  {
    next: 'next Url 2',
    results: [{name: '', url: ''}]
  }
]

const testResult = ['next Url 1', 'next Url 2']

test('getNextsUrls works', () => {
  expect(testData.reduce(getNextUrls, [])).toMatchObject(testResult)
})
