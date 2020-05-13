import { pluralFetch } from '../helpers/pluralFetch'
import { ExtractData, BasicInfo, IData } from '../dto/details'

class DataExtractor {
  extractVehicleData: ExtractData<BasicInfo, IData> = (handleAsociates) => (data) => {
    const {name, vehicle_class, starship_class, pilots} = data
    const vehicleClass = vehicle_class || starship_class

    pluralFetch(pilots, handleAsociates({name, vehicleClass}))
  }

  extractPlanetData: ExtractData<BasicInfo, IData> = (handleAsociates) => (data) => {
    const {name, population, residents} = data

    pluralFetch(residents, handleAsociates({name, population}))
  }

  extractPersonData: ExtractData<BasicInfo, IData> = (handleAsociates) => (data) => {
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
