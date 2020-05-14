import { getApiUrl, getImageSrc } from '../services/UrlBuilder'

import Asociated from './Asociated'
import AsociatedItem from '../components/AsociatedItem'
import Details from './Details'
import { IAsociated } from '../dto/asociated'
import { IPlanetDetailsState } from '../dto/details'
import React, { useContext } from 'react'
import Text from '../components/Text'
import { extractPlanetData } from '../services/DataExtractor'
import { useDetails } from '../hooks/useDetails'
import { useQuery } from '../hooks/useQuery'
import { StoreContext } from './Store'

const Planet = () => {
  const {type, id} = useQuery(['type', 'id'])
  const url = getApiUrl(type, id)
  const imageSrc = getImageSrc(type, id)
  const {dispatch, store: {details}} = useContext(StoreContext)

  const {name, population, asociated} = useDetails<IPlanetDetailsState>(url, extractPlanetData, dispatch, details)

  const asociatedList = asociated?.map((params: IAsociated) => {
    return <AsociatedItem key={params.name} {...params}/>
  })

  const list = <Asociated data={asociatedList} title={'people'}/>

  const description = [
    <Text key={'1'} type={'h1'} size={'20px'}>{name}</Text>,
    <Text key={'2'}>population: {population}</Text>
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

export default Planet
