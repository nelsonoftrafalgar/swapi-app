import React from 'react'
import styled from 'styled-components'

interface ITextProps {
  color?: string
  size?: string
  font?: string
  type?: string
}

interface IStyledTextProps {
  _color: string
  _size: string
  _font: string
}

const Text: React.FC<ITextProps> = ({
  children,
  type = 'p',
  size = '16px',
  font = 'sans-serif',
  color = 'black'
}) => {

  const StyledText = styled(type as any)<IStyledTextProps>`
    ${({_color}) => `color: ${_color};`}
    ${({_size}) => `font-size: ${_size};`}
    ${({_font}) => `font-family: ${_font};`}
  `

  return (
    <StyledText _color={color} _size={size} _font={font}>
      {children}
    </StyledText>
  )
}

export default Text
