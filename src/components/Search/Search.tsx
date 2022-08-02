import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import Container from '../Container'
import countryNames from '../../api/country_names.json'
import directoriesList from '../../api/countries_and_directories.json'
import directoryLogos from '../../api/directory_logos.json'
import * as api from '../../api/api'
import S from './style'

const Search: FC = () => {
  const [dataCompany, setDataCompany] = useState<any>(null)
  const [searching, setSearching] = useState(false)
  const [directories, setDirectories] = useState<string[]>([])
  const [form, setForm] = useState<api.SearchParams>({
    country: 'US',
    name: '',
    street: '',
    zip: ''
  })

  useEffect(() => {
    setDirectories(directoriesList[form.country as keyof typeof directoriesList] || [])
  }, [form.country])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    try {
      setSearching(true)
      const { response: { searchData, alreadyManaged, managedLocation } } = await api.search(form)

      const directoriesData: any[] = []
      directories.forEach(async (item: string) => {
        const { response: { result } } = await api.searchDirectory(searchData.id, searchData.token, item)
        directoriesData.push(result)
      })

      setDataCompany({
        alreadyManaged,
        searchData,
        directoriesData,
        managedLocation
      })
      
      setSearching(false)
    } catch (error) {
      console.error(error)
      setSearching(false)
    }
  }

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

  const renderLogos = () => (
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

  console.log(dataCompany)

  return (
    <S.Section>
      {renderLogos()}

      <Container>
        <S.Wrapper>
          <S.Title>Company presence check</S.Title>

          <S.Form hidden={searching}>
            <S.Field auto>
              <S.Label>Country</S.Label>
              <S.Select
                name='country'
                value={form.country}
                onChange={handleInput}
              >
                {renderOptions()}
              </S.Select>
            </S.Field>

            <S.Field>
              <S.Label>Company name</S.Label>
              <S.Input
                name='name'
                value={form.name}
                onChange={handleInput}
              />
            </S.Field>

            <S.Field>
              <S.Label>Street and Number</S.Label>
              <S.Input
                name='street'
                value={form.street}
                onChange={handleInput}
              />
            </S.Field>

            <S.Field auto>
              <S.Label>ZIP/Postcode</S.Label>
              <S.Input
                name='zip'
                value={form.zip}
                onChange={handleInput}
                zip
              />
            </S.Field>

            <S.Field auto>
              <S.Button onClick={handleSubmit}>Check now</S.Button>
            </S.Field>
          </S.Form>

          {searching && <S.Loading>Searching...</S.Loading>}
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}

export default Search
