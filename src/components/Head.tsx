import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { GlobalStyle } from 'styles'

const Head: FC = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
    </Helmet>
    <GlobalStyle />
  </>
)

export default Head
