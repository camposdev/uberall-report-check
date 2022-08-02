import React, { FC } from 'react'
import styled from 'styled-components'
import { palette, prop, theme } from 'styled-tools'
import Table from './Table'

const ResultManaged: FC<any> = ({ data }) => {
  return (
    <S.Container>
      <S.Aside>
        <S.TitleSidebar>We are taking care of your listings on these directories.</S.TitleSidebar>

        <S.TextSidebar>
          <b>{data.name}</b> <br />
          {data.streetAndNo} <br />
          {data.zip} {data.province}
        </S.TextSidebar>

        <S.TextSidebar>
          {data.phone && <>{data.phone} <br /></>}
          {data.website && <>{data.website} <br /></>}
          {data.email}
        </S.TextSidebar>

        <S.TextSidebar>
          Profile completeness:
        </S.TextSidebar>
        <S.ProgressBar value={data.profileCompleteness}></S.ProgressBar>
      </S.Aside>

      <S.TableResult>
        <Table data={data} managed />
      </S.TableResult>
    </S.Container>
  )
}

export default ResultManaged

const S: any = {}

S.Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme('breakpoints.md')}) {
    flex-direction: row;
  }
`

S.Aside = styled.aside`
  margin-bottom: 20px;
  flex: 1;
  color: ${palette('grey')};

  @media (min-width: ${theme('breakpoints.md')}) {
    margin: 0 40px 0 0;
    flex: 0 0 300px;
  }
`

S.TableResult = styled.div`
  flex: 1
`

S.TitleSidebar = styled.h3`
  font-size: 1.6rem;
  margin: 0 0 20px;
  color: ${palette('light')};
  background-color: ${palette('success')};
  padding: 10px 20px;
  border-radius: 4px;
`

S.TextSidebar = styled.p`
  font-size: 1.6rem;
  margin: 0 0 15px;

  b {
    color: ${palette('accent')};
  }
`

S.ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: ${palette('light')};
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  margin: 15px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${prop('value')}%;
    height: 10px;
    border-radius: 5px;
    background-color: ${palette('accent')};
  }

  &::after {
    content: '${prop('value')}%';
    position: absolute;
    top: 0;
    left: ${prop('value')}%;
    margin-left: -10px;
    margin-top: -8px;
    width: 26px;
    height: 26px;
    background-color: ${palette('accent')};
    color: ${palette('white')};
    font-size: 0.9rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
`

