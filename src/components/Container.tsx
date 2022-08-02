import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Container: FC<Props> = ({ children, ...props }) => (
  <S.Main {...props}>
    {children}
  </S.Main>
)

export default Container

const S: any = {}

S.Main = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`
