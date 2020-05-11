const TYPES = ['planets', 'people', 'vehicles', 'starships']

export const getTypeFromUrl = (url: string) => {
  const type = TYPES.find((el) => url.includes(el))
  return type === 'people' ? 'characters' : type
}
