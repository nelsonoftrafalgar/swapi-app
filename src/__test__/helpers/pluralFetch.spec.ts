import { pluralFetch } from '../../helpers/pluralFetch'

const mockUrl = ['mockurl1']
const mockUrls = ['mockurl1', 'mockurl2']

const mockSingleResponse = [{data: 'single'}]
const mockMultipleResponse = [{data: 'multiple'}]

const mockResolveData = {json: () => {return}}
const testHandler = jest.fn(() => null)

beforeEach(() => {
  jest.clearAllMocks()
})

const getMockRequest = (response: Array<{data: string}>) => {
  return jest
    .spyOn(Promise, 'all')
    .mockImplementation(() => Promise.resolve(response))
}

test('pluralFetch works for single url', async () => {
  (global as any).fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResolveData))

  const mockRequest = getMockRequest(mockSingleResponse)
  await pluralFetch(mockUrl, testHandler)

  expect(mockRequest).toHaveBeenCalledTimes(1)
  expect(testHandler).toHaveBeenCalledTimes(1)
  expect(testHandler).toHaveBeenCalledWith(mockSingleResponse)

  mockRequest.mockClear()
})

test('pluralFetch works for multiple urls', async () => {
  const mockRequest = getMockRequest(mockMultipleResponse)
  await pluralFetch(mockUrls, testHandler)

  expect(mockRequest).toHaveBeenCalledTimes(1)
  expect(testHandler).toHaveBeenCalledTimes(1)
  expect(testHandler).toHaveBeenCalledWith(mockMultipleResponse)

  mockRequest.mockClear()
})
