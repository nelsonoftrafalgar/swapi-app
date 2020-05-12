export const pluralFetch = (urls: string[], handler: (data: any) => void) => {
  Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
    .then(handler)
}
