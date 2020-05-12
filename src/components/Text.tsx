import React from 'react'
import styled from 'styled-components'

interface ITextProps {
  color?: string
  size?: string
  font?: string
  type?: string
}

const Text: React.FC<ITextProps> = ({
  children,
  type = 'p',
  size = '16px',
  font = 'sans-sefif',
  color = 'black'
}) => {

  const StyledText = styled(type as any)<ITextProps>`
    ${({color}) => `color: ${color};`}
    ${({size}) => `font-size: ${size};`}
    ${({font}) => `font-family: ${font};`}
  `

  return (
    <StyledText color={color} size={size} font={font}>
      {children}
    </StyledText>
  )
}

export default Text
