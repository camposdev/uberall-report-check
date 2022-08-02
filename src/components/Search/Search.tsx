import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import styled from "styled-components"
import Container from '../Container'
import directoriesList from '../../api/countries_and_directories.json'
import * as api from '../../api/api'
import Form from './Form'
import DirectoryLogos from './DirectoryLogos'
import Result from './Result'
import AutoFill from './AutoFill'

export type DataCompany = {
  alreadyManaged?: boolean
  searchData: Record<string, any>
  directoriesData?: Record<string, any>[]
  managedLocation?: Record<string, any>
}

const Search: FC = () => {
  const [dataCompany, setDataCompany] = useState<DataCompany | null>(null)
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
    setSearching(true)
    setDataCompany(null)
    
    const { response: { searchData, alreadyManaged, managedLocation } } = await api.search(form)

    setDataCompany({
      alreadyManaged,
      searchData,
      managedLocation,
      directoriesData: []
    })
    
    if (!alreadyManaged) {
      directories.forEach(async (item: string) => {
        const { response: { result } } = await api.searchDirectory(searchData.id, searchData.token, item)
        result && setDataCompany((prev: any) => ({ ...prev, directoriesData: [...prev.directoriesData, result] }))
      })
    }

    setSearching(false)
  }

  const handleAutoFill = (data: any) => {
    setForm(data)
  }

  return (
    <S.Section>
      <DirectoryLogos directories={directories} />

      <Container>
        <Form
          searching={searching}
          form={form}
          onChangeInput={handleInput}
          onSubmit={handleSubmit}
        />

        <AutoFill onFill={handleAutoFill} />

        <Result data={dataCompany} />
      </Container>
    </S.Section>
  )
}

export default Search

const S: any = {}

S.Section = styled.section`
  position: relative;
`