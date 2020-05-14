import { getApiUrl, getImageSrc, getLinkHref } from '../services/UrlBuilder'

import Asociated from './Asociated'
import AsociatedItem from '../components/AsociatedItem'
import Details from './Details'
import { IAsociated } from '../dto/asociated'
import { IPersonDetailsState } from '../dto/details'
import React, { useContext } from 'react'
import Text from '../components/Text'
import { Url } from '../styles/shared'
import { extractPersonData } from '../services/DataExtractor'
import { useDetails } from '../hooks/useDetails'
import { useQuery } from '../hooks/useQuery'
import { StoreContext } from './Store'

const Person = () => {
  const {type, id} = useQuery(['type', 'id'])
  const url = getApiUrl(type, id)
  const imageSrc = getImageSrc(type, id)
  const {dispatch, store: {details}} = useContext(StoreContext)

  const {name, asociated} = useDetails<IPersonDetailsState>(url, extractPersonData, dispatch, details)

  const planet = asociated?.find((item: IAsociated) => item.type === 'planets')!
  const race = asociated?.find((item: IAsociated) => item.type === 'species')

  const asociatedList = asociated?.reduce((a: JSX.Element[], params: IAsociated) => {
    const item = <AsociatedItem key={params.name} {...params}/>
    return params.type === 'planets' || params.type === 'species' ? a : [...a, item]
  }, [])

  const href = getLinkHref(planet?.type, planet?.id)

  const list = <Asociated data={asociatedList} title={'vehicles'}/>

  const description = [
    <Text key={'1'} type={'h1'} size={'20px'}>{name}</Text>,
    <Text key={'2'}>race: {race?.name || 'unknown'}</Text>,
    <Text key={'3'}>planet: <Url to={href}>{planet?.name}</Url></Text>
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

export default Person
