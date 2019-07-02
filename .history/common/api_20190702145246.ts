import axios, { AxiosRequestConfig } from 'axios'

/**
 * api endpoints
 */
const PATH = process.env.API_BASE_URL

export const endpoints = {
  video: {
    // TODO: localと本番で違うのがキモいので、json-server側の設定で修正する
    POST:
      process.env.NODE_ENV === 'production'
        ? `${PATH}/videos`
        : `${PATH}/videos/1`,
    GET: `${PATH}/videos`,
    PUT: `${PATH}/videos`
  },
  categories: {
    GET: `${PATH}/categories`
  },
  myGroup: {
    GET: `${PATH}/my_groups`
  },
  tags: {
    GET: `${PATH}/suggestions/tags`
  },
  diagnosis: {
    GET: `${PATH}/suggestions/diagnoses`
  },
  main_procedures: {
    GET: `${PATH}/suggestions/main_procedures`
  },
  procedures: {
    GET: `${PATH}/suggestions/procedures`
  },
  related_videos: {
    GET: `${PATH}/related_videos`
  }
}

/**
 * Create an Axios Client with defaults
 */
const CSRF_TOKEN = 'NrOp5bsjoLRuK8IW5+dQEYjKGUJDe7TQoZVvq95Wteg='
export const client = axios.create({
  withCredentials: process.env.NODE_ENV !== 'production',
  headers: { 'X-CSRF-TOKEN': CSRF_TOKEN }
})

/**
 * api request
 */
export const request = (options: AxiosRequestConfig) => {
  return client(options)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error(error)
      return Promise.reject(new Error('Request Failed'))
    })
}
