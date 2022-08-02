import React from 'react'
import { Head, Header, Search } from 'components'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <Header />
      <Search />
    </ThemeProvider>
  )
}

export default App
