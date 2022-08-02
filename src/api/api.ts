import axios from 'axios'
import countries from './country_names.json'

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export type SearchParams = {
  name: string
  street: string
  zip: string
  country: keyof typeof countries
}

const search = async (params: SearchParams) => {
  try {
    const { data } = await axios.post(
      'search', {
        ...params,
        public_key: PUBLIC_KEY
      }
    )

    return data
  } catch (error) {
    console.error(error)
  }
}

const searchDirectory = async (id: number, token: string, directory: string = '') => {
  try {
    const { data } = await axios.get(
      `search/${id}`, {
        params: {
          token,
          directory,
          public_key: PUBLIC_KEY
        }
      }
    )

    return data
  } catch (error) {
    console.error(error)
  }
}

export { search, searchDirectory }