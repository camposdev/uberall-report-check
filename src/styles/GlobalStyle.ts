import { createGlobalStyle } from 'styled-components'
import { palette } from 'styled-tools'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    color: ${palette('dark')};
  }

  input,
  button,
  select {
    font-family: 'Poppins', sans-serif;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
