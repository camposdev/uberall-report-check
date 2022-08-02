import React, { FC } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import { DataCompany } from './Search'
import BannerDemo from './BannerDemo'
import Table from './Table'
import ResultManaged from './ResultManaged'

type Props = {
  data: DataCompany | null
}

const Result: FC<Props> = ({ data }): any => {
  if (!data) return

  return (
    <>
      <S.Header>
        <S.Title>Results for</S.Title>
        <S.CompanyName>{data.searchData.name}</S.CompanyName>
      </S.Header>

      {data.alreadyManaged ? (
        <ResultManaged data={data.managedLocation} />
      ) : (
        <>
          <BannerDemo />
          <Table data={data.directoriesData} />
          <BannerDemo />
        </>
      )}
    </>
  )
}

export default Result

const S: any = {}

S.Header = styled.div`
  text-align: center;
  margin: 40px 0;
`

S.Title = styled.h3`
  margin: 0;
`

S.CompanyName = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  margin: 0;
  color: ${palette('accent')};
`
