import { IAsociatesInfo } from '../hooks/useDetails'
import { pluralFetch } from '../helpers/pluralFetch'

export interface IVehicleData {
  name: string
  vehicle_class: string
  starship_class: string
  pilots: string[]
}

export interface IPlanetData {
  name: string
  population: string
  residents: string[]
}

export interface IPersonData {
  name: string
  homeworld: string
  species: string[]
  vehicles: string[]
  starships: string[]
}

export type ExtractAsociates <B> = (basicInfo: B) => (info: IAsociatesInfo) => void

interface IVehicleAsociates {
  name: string
  vehicleClass: string
}

interface IPlanetAsociated {
  name: string
  population: string
}

interface IPersonAsociates {
  name: string
}

class DataExtractor {
  extractVehicleData = (handleAsociates: ExtractAsociates<IVehicleAsociates>) => (data: IVehicleData) => {
    const {name, vehicle_class, starship_class, pilots} = data
    const vehicleClass = vehicle_class || starship_class

    pluralFetch(pilots, handleAsociates({name, vehicleClass}))
  }

  extractPlanetData = (handleAsociates: ExtractAsociates<IPlanetAsociated>) => (data: IPlanetData) => {
    const {name, population, residents} = data

    pluralFetch(residents, handleAsociates({name, population}))
  }

  extractPersonData = (handleAsociates: ExtractAsociates<IPersonAsociates>) => (data: IPersonData) => {
    const {name, homeworld, species, starships, vehicles} = data
    const info = [...vehicles, ...starships, homeworld, ...species]

    pluralFetch(info, handleAsociates({name}))
  }
}

export const {
  extractVehicleData,
  extractPlanetData,
  extractPersonData
} = new DataExtractor()
