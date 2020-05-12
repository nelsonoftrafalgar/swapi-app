import { getApiUrl, getImageSrc } from '../services/UrlBuilder'

import Asociated from './Asociated'
import AsociatedItem from '../components/AsociatedItem'
import Details from './Details'
import { IAsociated } from '../dto/asociated'
import React from 'react'
import Text from '../components/Text'
import { extractPlanetData } from '../services/DataExtractor'
import { useDetails } from '../hooks/useDetails'
import { useQuery } from '../hooks/useQuery'

interface IPlanetDetailsState {
  name: string
  population: string
  asociated: IAsociated[]
}

const Planet = () => {
  const {type, id} = useQuery(['type', 'id'])
  const url = getApiUrl(type, id)
  const imageSrc = getImageSrc(type, id)

  const {name, population, asociated} = useDetails(url, extractPlanetData)

  const asociatedList = asociated?.map((params: IAsociated) => {
    return <AsociatedItem key={params.name} {...params}/>
  })

  const list = <Asociated data={asociatedList} title={'people'}/>

  const description = [
    <Text type={'h1'} size={'20px'}>{name}</Text>,
    <Text>population: {population}</Text>
  ]

  return (
    <Details imageSrc={imageSrc} description={description} list={list}/>
  )
}

export default Planet
