import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  status: 'NOT_NEEDED' | 'CONNECTED' | 'NOT_CONNECTED'
}

const IconStatus: FC<Props> = ({ status }) => {
  switch (status) {
    case 'NOT_NEEDED':
      return <S.Icon src='https://static-prod.uberall.com/assets/statusCheck/safeguard_published.svg' alt={status} />
    case 'CONNECTED':
      return <S.Icon src='https://static-prod.uberall.com/assets/statusCheck/safeguard_active.svg' alt={status} />
    case 'NOT_CONNECTED':
      return <S.Icon src='https://static-prod.uberall.com/assets/statusCheck/safeguard_updating.svg' alt={status} />
  }
}

export default IconStatus

const S: any = {}

S.Icon = styled.img`
  height: 30px;
  width: auto;
`