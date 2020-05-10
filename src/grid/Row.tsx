import { IRwdPararms, breakpoint } from '../styles/breakpoint'

import React from 'react'
import styled from 'styled-components'

interface IRowStyle {
  direction: string
  mt: string
  pb: string
  expand: boolean
  rwdParams: IRwdPararms[]
}

interface IRow {
  direction?: string
  mt?: string
  pb?: string
  expand?: boolean
  rwdParams?: IRwdPararms[]
}

const Style = styled('div')<IRowStyle>`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${({direction}) => `flex-direction: ${direction};`}
  ${({mt}) => `margin-top: ${mt}px;`}
  ${({pb}) => `padding-bottom: ${pb}px;`}
  ${({expand}) => `flex-grow: ${expand ? 1 : 0};`}
  ${({rwdParams}) => rwdParams.map(breakpoint)}
`

const Row: React.FC<IRow> = ({
  children,
  mt = '0',
  pb = '0',
  direction = 'column',
  expand = false,
  rwdParams = []
}) => {
  return (
    <Style
      direction={direction}
      mt={mt}
      expand={expand}
      pb={pb}
      rwdParams={rwdParams}
    >
      {children}
    </Style>
  )
}

export {Row}
