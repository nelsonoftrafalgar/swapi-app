export const pluralFetch = (urls: string[], handler: any) => {
  Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
    .then(handler)
    .catch((error) => {
      throw new Error(error)
    })
}
