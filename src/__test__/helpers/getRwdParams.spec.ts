import { getRwdParams } from '../../helpers/getRwdParams'

const testData = [
  ['test widht 1', 'test content 1'],
  ['test widht 2', 'test content 2']
]

const testResult = [
  {width: 'test widht 1', content: 'test content 1'},
  {width: 'test widht 2', content: 'test content 2'}
]

test('getRwdParams works', () => {
  expect(getRwdParams(testData)).toMatchObject(testResult)
})
