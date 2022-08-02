import React, { FC } from 'react'
import styled from 'styled-components'
import { ifProp, palette } from 'styled-tools'
import directoryLogos from '../../api/directory_logos.json'
import IconCheck from './IconCheck'
import IconStatus from './IconStatus'

type Props = {
  data: any | undefined
  managed?: boolean
}

const Table: FC<Props> = ({ data, managed = false }) => {
  const isNotFound = (item: any) => {
    return !item.name && !item.streetAndNo && !item.phone && !item.website
  }

  const renderInfo = (item: any) => {
    const name = item.name 
      ? <S.Text>{item.name}</S.Text> 
      : <S.Text error>Name missing</S.Text>
    const address = item.streetAndNo 
      ? <S.Text>{item.streetAndNo}, {item.city}</S.Text> 
      : <S.Text error>Address missing</S.Text>
    const phone = item.phone 
      ? <S.Text>{item.phone}</S.Text> 
      : <S.Text error>Phone missing</S.Text>
    const website = item.website 
      ? <S.Text><a href={item.website} target='_blank' rel="noreferrer">{item.website}</a></S.Text> 
      : <S.Text error>Website missing</S.Text>

    return (
      <>
        {isNotFound(item) ? (
          <S.Text error>Listing not found</S.Text>
        ) : (
          <>
            {name}
            {address}
            {phone}
            {website}
          </>
        )}
      </>
    )
  }

  const renderLogo = (directory: keyof typeof directoryLogos) => {
    const logo = directoryLogos[directory]
    if (!logo) return false
    return (
      <S.Logo src={logo} alt={logo} />
    )
  }

  const renderNotManagedTable = () => (
    <S.Table>
      <thead>
        <tr>
          <th align='left'>Directory</th>
          <th align='left'>Business Info</th>
          <th>Hours</th>
          <th>Photos</th>
        </tr>
      </thead>

      <tbody>
        {data?.map((item: any, index: number) => (
          <tr key={index}>
            <td>
              {renderLogo(item.directoryType)}
            </td>
            <td>
              {renderInfo(item)}
            </td>
            <td align='center'>
              {!isNotFound(item) && <IconCheck status={item.moreHoursStatus} />}
            </td>
            <td align='center'>
              {!isNotFound(item) && <IconCheck status={item.photosStatus} />}
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  )

  const renderManagedTable = () => (
    <S.Table>
      <thead>
        <tr>
          <th align='left'>Directory</th>
          <th align='center'>Status</th>
        </tr>
      </thead>

      <tbody>
        {data?.managedListings.map((item: any, index: number) => (
          <tr key={index}>
            <td>
              <S.Directory>
                {renderLogo(item.type)}
                {item.type.toLowerCase()}
              </S.Directory>
            </td>
            <td align='center'>
              <IconStatus status={item.connectStatus} />
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  )

  if (managed) return renderManagedTable()

  return renderNotManagedTable()
}

export default Table

const S: any = {}

S.Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 50px;

  th {
    background-color: ${palette('primary')};
    color: ${palette('white')};
    padding: 10px;
    font-weight: 400;
    font-size: 1.6rem;
    
    &:first-child {
      border-radius: 8px 0 0 0;
    }

    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }

  td {
    padding: 10px;
  }

  tr {
    &:nth-child(odd) {
      td {
        background-color: ${palette('light')};
      }
    }
  }
`

S.Text = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${ifProp('error', palette('error'), palette('grey'))};
`

S.Logo = styled.img`
  display: inline-block;
  width: 40px;
  height: auto;
  margin: 0;
  border-radius: 4px;
`

S.Directory = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${palette('grey')};

  img {
    margin-right: 5px;
  }
`