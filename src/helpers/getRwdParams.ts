export const getRwdParams = (params: string[][]) => {
  return params.map(([width, content]) => ({width, content}))
}