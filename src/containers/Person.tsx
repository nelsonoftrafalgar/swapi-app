import { getApiUrl, getImageSrc, getLinkHref } from '../services/UrlBuilder'

import Asociated from './Asociated'
import AsociatedItem from '../components/AsociatedItem'
import Details from './Details'
import { IAsociated } from '../dto/asociated'
import { Link } from 'react-router-dom'
import React from 'react'
import Text from '../components/Text'
import { extractPersonData } from '../services/DataExtractor'
import styled from 'styled-components'
import { useDetails } from '../hooks/useDetails'
import { useQuery } from '../hooks/useQuery'

interface IPersonDetailsState {
  name: string
  race: string
  asociated: IAsociated[]
}

const Url = styled(Link)`
  text-decoration: none;
  color: black;
`

const Person = () => {
  const {type, id} = useQuery(['type', 'id'])

  const url = getApiUrl(type, id)
  const imageSrc = getImageSrc(type, id)

  const {name, asociated} = useDetails(url, extractPersonData)

  const planet = asociated?.find((item: any) => item.type === 'planets')
  const race = asociated?.find((item: any) => item.type === 'species')

  const asociatedList = asociated?.reduce((a: JSX.Element[], params: IAsociated) => {
    const item = <AsociatedItem key={params.name} {...params}/>
    return params.type === 'planets' || params.type === 'species' ? a : [...a, item]
  }, [])

  const href = getLinkHref(planet?.type, planet?.id)

  const list = <Asociated data={asociatedList} title={'vehicles'}/>

  const description = [
    <Text type={'h1'} size={'20px'}>{name}</Text>,
    <Text>race: {race?.name || 'unknown'}</Text>,
    <Text>planet: <Url to={href}>{planet?.name}</Url></Text>
  ]

  return (
    <Details imageSrc={imageSrc} description={description} list={list}/>
  )
}

export default Person
