import React, { ChangeEvent, FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { ifProp, palette, theme } from 'styled-tools'
import Button from '../Button'
import countryNames from '../../api/country_names.json'

type Props = {
  searching: boolean
  form: any
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}

const Form: FC<Props> = ({ searching, form, onChangeInput, onSubmit }) => {
  const renderOptions = () => (
    Object.keys(countryNames).map((key) => (
      <option
        value={key}
        key={key}
      >
        {countryNames[key as keyof typeof countryNames]}
      </option>
    ))
  )

  return (
    <S.ContainerForm>
      <S.Title>Company presence check</S.Title>
    
      <S.Form hidden={searching}>
        <S.Field auto>
          <S.Label>Country</S.Label>
          <S.Select
            name='country'
            value={form.country}
            onChange={onChangeInput}
          >
            {renderOptions()}
          </S.Select>
        </S.Field>

        <S.Field>
          <S.Label>Company name</S.Label>
          <S.Input
            name='name'
            value={form.name}
            onChange={onChangeInput}
          />
        </S.Field>

        <S.Field>
          <S.Label>Street and Number</S.Label>
          <S.Input
            name='street'
            value={form.street}
            onChange={onChangeInput}
          />
        </S.Field>

        <S.Field auto>
          <S.Label>ZIP/Postcode</S.Label>
          <S.Input
            name='zip'
            value={form.zip}
            onChange={onChangeInput}
            zip
          />
        </S.Field>

        <S.Field auto>
          <Button onClick={onSubmit}>Check now</Button>
        </S.Field>
      </S.Form>
      
      {searching && <S.Loading>Searching...</S.Loading>}
    </S.ContainerForm>
  )
}

export default Form

const S: any = {}

S.Form = styled.div`
  display: flex;
  flex-direction: column;
  transition: all .3s ease;
  opacity: ${ifProp('hidden', '0', '1')};
  
  @media (min-width: ${theme('breakpoints.md')}) {
    flex-direction: row;
    align-items: flex-end;
  }
`

S.Input = styled.input`
  background-color: ${palette('white')};
  border-radius: 4px;
  color: ${palette('dark')};
  padding: 0 10px;
  height: 3.4rem;
  width: 100%;
  border: 1px solid ${palette('white')};
  &:focus {
    outline: none;
    border-color: ${palette('accent')};
  }

  @media (min-width: ${theme('breakpoints.md')}) {
    width: ${ifProp('zip', '120px', '100%')};
  }
`

S.Select = styled.select`
  background-color: ${palette('white')};
  border-radius: 4px;
  color: ${palette('dark')};
  padding: 0 10px;
  height: 3.4rem;
  width: 100%;
  border: 1px solid ${palette('white')};
  &:focus {
    outline: none;
    border-color: ${palette('accent')};
  }

  @media (min-width: ${theme('breakpoints.md')}) {
    width: 170px;
  }
`

S.Label = styled.label`
  display: block;
  font-size: 1.2rem;
`

S.Field = styled.div`
  flex-grow: ${ifProp('auto', '0', 1)};
  margin: 0 10px 20px;

  @media (min-width: ${theme('breakpoints.md')}) {
    margin-bottom: 0;
  }
`

S.ContainerForm = styled.div`
  width: 100%;
  background-color: ${palette('primary')};
  padding: 20px;
  border-radius: 8px;
  margin-top: -70px;
  color: ${palette('white')};
`

S.Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  margin: 0 0 20px;

  @media (min-width: ${theme('breakpoints.sm')}) {
    font-size: 2rem;
  }
`

const pulse = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.1) }
  100% { transform: scale(1) }
`;

S.Loading = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  animation: ${pulse} .6s ease infinite;
`