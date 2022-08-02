import React, { FC } from 'react'

const Logo: FC = (props) => (
  <img
    src='https://uberall.com/assets/images/logo.svg'
    alt='Uberall'
    width={220}
    {...props}
  />
)

export default Logo
