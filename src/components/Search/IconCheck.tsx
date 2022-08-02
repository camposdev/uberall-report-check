import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  status: 'MISSING' | 'PRESENT' | 'NOT_APPLICABLE'
}

const IconCheck: FC<Props> = ({ status }) => {
  switch (status) {
    case 'MISSING':
      return <S.Icon src='https://static-prod.uberall.com/assets/statusCheck/missing.svg' alt='Missing' />
    case 'PRESENT':
      return <S.Icon src='https://static-prod.uberall.com/assets/statusCheck/present.svg' alt='Online' />
    case 'NOT_APPLICABLE':
      return <S.Icon src='https://static-prod.uberall.com/assets/statusCheck/not_available.svg' alt='Not applicable' />
  }
}

export default IconCheck

const S: any = {}

S.Icon = styled.img`
  height: 18px;
  width: auto;
`