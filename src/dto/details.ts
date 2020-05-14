import { IAsociated, IAsociatesInfo } from './asociated'

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

export type IData = IVehicleData & IPlanetData & IPersonData

export interface IVehicleBasicInfo {
  name: string
  vehicleClass: string
}

export interface IPlanetBasicInfo {
  name: string
  population: string
}

export interface IPersonBasicInfo {
  name: string
}

export type BasicInfo = IVehicleBasicInfo | IPlanetBasicInfo | IPersonBasicInfo

export type ExtractAsociates <B> = (basicInfo: B) => (info: IAsociatesInfo[]) => void

export type ExtractData <B, D> = (handleAsociates: ExtractAsociates<B>) => (data: D) => void

export interface IPersonDetailsState {
  name: string
  race: string
  asociated: IAsociated[]
}

export interface IPlanetDetailsState {
  name: string
  population: string
  asociated: IAsociated[]
}

export interface IVehicleDetailsState {
  name: string
  vehicleClass: string
  asociated: IAsociated[]
}

export type DetailsState = IPersonDetailsState & IPlanetDetailsState & IVehicleDetailsState

export type DetailsKey = string
