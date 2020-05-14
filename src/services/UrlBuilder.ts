class UrlBuilder {
  private MASTER_PATH = 'https://swapi.dev/api'

  CHARACTERS_PATHS = [`${this.MASTER_PATH}/people`]
  PLANETS_PATHS = [`${this.MASTER_PATH}/planets/`]
  VEHICLES_PATHS = [`${this.MASTER_PATH}/vehicles/`, `${this.MASTER_PATH}/starships/`]

  DETAILS_IMG_FALLBACK = 'https://via.placeholder.com/250x150.png?text=No+image'
  LIST_IMG_FALLBACK = 'https://via.placeholder.com/150x100.png?text=No+image'

  getImageSrc = (type: string, id: string) => {
    return `https://starwars-visualguide.com/assets/img/${type === 'people' ? 'characters' : type}/${id}.jpg`
  }

  getLinkHref = (type: string, id: string) => {
    return {pathname: `/details/${type}`, search: `?type=${type}&id=${id}`}
  }

  getApiUrl = (type: string, id: string) => {
    return `${this.MASTER_PATH}/${type}/${id}`
  }
}

export const {
  DETAILS_IMG_FALLBACK,
  LIST_IMG_FALLBACK,
  CHARACTERS_PATHS,
  PLANETS_PATHS,
  VEHICLES_PATHS,
  getApiUrl,
  getImageSrc,
  getLinkHref
} = new UrlBuilder()
