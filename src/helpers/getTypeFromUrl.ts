const TYPES = ['planets', 'people', 'vehicles', 'starships', 'species']

export const getTypeFromUrl = (url: string) => {
  return TYPES.find((el) => url.includes(el))
}
