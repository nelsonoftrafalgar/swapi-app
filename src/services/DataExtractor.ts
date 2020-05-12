import { pluralFetch } from '../helpers/pluralFetch'

class DataExtractor {
  extractVehicleData = (handleAsociates: any) => (data: any) => {
    const name = data.name
    const vehicleClass = data.vehicle_class || data.starship_class
    const info = data.pilots

    pluralFetch(info, handleAsociates({name, vehicleClass}))
  }

  extractPlanetData = (handleAsociates: any) => (data: any) => {
    const name = data.name
    const population = data.population
    const info = data.residents

    pluralFetch(info, handleAsociates({name, population}))
  }

  extractPersonData = (handleAsociates: any) => (data: any) => {
    const name = data.name
    const planet = data.homeworld
    const race = data.species
    const info = [...data.vehicles, ...data.starships, planet, ...race]

    pluralFetch(info, handleAsociates({name}))
  }
}

export const {
  extractVehicleData,
  extractPlanetData,
  extractPersonData
} = new DataExtractor()
