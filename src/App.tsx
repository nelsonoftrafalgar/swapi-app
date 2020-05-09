import React from 'react'
import { createGlobalStyle } from 'styled-components'

const StyleReset = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}`

const App = () => {
  return (
    <>
      <StyleReset />
      <div>hello</div>
    </>
  )
}

export default App