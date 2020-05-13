import { getApiUrl, getImageSrc } from '../services/UrlBuilder'

import Asociated from './Asociated'
import AsociatedItem from '../components/AsociatedItem'
import Details from './Details'
import { IAsociated } from '../dto/asociated'
import { IVehicleDetailsState } from '../dto/details'
import React from 'react'
import Text from '../components/Text'
import { extractVehicleData } from '../services/DataExtractor'
import { useDetails } from '../hooks/useDetails'
import { useQuery } from '../hooks/useQuery'

const Vehicle = () => {
  const {type, id} = useQuery(['type', 'id'])
  const url = getApiUrl(type, id)
  const imageSrc = getImageSrc(type, id)

  const {name, vehicleClass, asociated} = useDetails<IVehicleDetailsState>(url, extractVehicleData)

  const asociatedList = asociated?.map((params: IAsociated) => {
    return <AsociatedItem key={params.name} {...params}/>
  })

  const list = <Asociated data={asociatedList} title={'people'}/>

  const description = [
    <Text key={'1'} type={'h1'} size={'20px'}>{name}</Text>,
    <Text key={'2'}>class: {vehicleClass}</Text>
  ]

  return (
    <Details
      isLoading={!Boolean(name)}
      imageSrc={imageSrc}
      description={description}
      list={list}
    />
  )
}

export default Vehicle
