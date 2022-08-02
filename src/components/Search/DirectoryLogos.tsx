import React, { FC } from 'react'
import styled from 'styled-components'
import directoryLogos from '../../api/directory_logos.json'

type Props = {
  directories: string[]
}

const DirectoryLogos: FC<Props> = ({ directories }) => {
  return (
    <S.Logos>
      {directories.map((item: string) => {
        const logo = directoryLogos[item as keyof typeof directoryLogos]
        if (!logo) return false
        return (
          <S.Logo src={logo} alt={item} key={item} />
        )
      })}
    </S.Logos>
  )
}

export default DirectoryLogos

const S: any = {}

S.Logos = styled.div`
  position: absolute;
  top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
`

S.Logo = styled.img`
  width: 30px;
  height: auto;
  margin: 0 5px;
  border-radius: 4px;
`
