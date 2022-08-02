import React, { FC } from 'react'
import styled from 'styled-components'
import { palette, theme } from 'styled-tools'
import Button from '../Button'

const BannerDemo: FC = () => {
  return (
    <S.Banner>
      <S.BannerText>Learn how accurate and complete data can double your visibility and conversions</S.BannerText>
      <S.Button variant='success'>Request a demo</S.Button>
    </S.Banner>
  )
}

export default BannerDemo

const S: any = {}

S.Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 30px;
  background-color: ${palette('light')};
  border-radius: 8px;
  padding: 20px;

  @media (min-width: ${theme('breakpoints.md')}) {
    flex-direction: row;
  }
`

S.BannerText = styled.h4`
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0 0 20px;
  
  @media (min-width: ${theme('breakpoints.md')}) {
    font-size: 1.6rem;
    margin: 0 20px 0 0;
  }
`

S.Button = styled(Button)`
  flex: 0 1;
`