import { IRwdPararms, breakpoint } from '../styles/breakpoint'

import React from 'react'
import styled from 'styled-components'

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface IColStyle {
  size: number
  rwdParams: IRwdPararms[]
  padding: string
}

interface ICol {
  size: ColSize
  rwdParams?: IRwdPararms[]
  padding?: string
}

const Style = styled('div')<IColStyle>`
  ${({padding}) => `padding: ${padding};`}
  ${({size}) => `width: calc(${size} / 12 * 100%);`}
  ${({rwdParams}) => rwdParams.map(breakpoint)}
`

const Col: React.FC<ICol> = ({
  children,
  size,
  rwdParams = [],
  padding = ''
}) => {
  return (
    <Style padding={padding} size={size} rwdParams={rwdParams}>
      {children}
    </Style>
  )
}

export {Col}
