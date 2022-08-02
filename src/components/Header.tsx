import React, { FC } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Container from './Container'
import { palette, theme } from 'styled-tools'

const Header: FC = () => {
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <S.Title>Is your company listed accurately in these online directories?</S.Title>
      </S.Container>
    </S.Header>
  )
}

export default Header

const S: any = {}

S.Header = styled.header`
  padding: 50px 0 170px;
  background-color: ${palette('light')}
`

S.Container = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${palette('primary')};
  margin: 50px 0 0;

  @media (min-width: ${theme('breakpoints.sm')}) {
    font-size: 3rem;
  }

  @media (min-width: ${theme('breakpoints.md')}) {
    font-size: 4rem;
  }
`