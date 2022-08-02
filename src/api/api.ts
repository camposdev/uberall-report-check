import axios from 'axios'
import countries from './country_names.json'

const BASE_URL = 'https://sandbox.uberall.com/api/'
const PUBLIC_KEY = 'GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf'

axios.defaults.baseURL = BASE_URL

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

const searchDirectory = async (id: number, token: string, directory: string) => {
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