/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'

type Props = {
  onFill: (data: any) => void
}

const AutoFill: FC<Props> = ({ onFill }) => {
  const autoFillManaged = () => {
    onFill({
      country: 'DE',
      name: 'Uberall',
      street: 'Hussitenstraße 32-33',
      zip: '13355'
    })
  }

  const autoFillNotManaged = () => {
    onFill({
      country: 'BR',
      name: 'Jack Music Bar',
      street: 'Rua Pedro Môro Redeschi 177',
      zip: '83005-060'
    })
  }

  return (
    <p>
      <small>Auto fill: <a onClick={autoFillManaged}>Managed</a> | <a onClick={autoFillNotManaged}>Not Managed</a></small>
    </p>
  )
}

export default AutoFill
