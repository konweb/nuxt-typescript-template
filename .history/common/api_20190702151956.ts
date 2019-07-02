import axios, { AxiosRequestConfig } from 'axios'

/**
 * api endpoints
 */
const PATH = process.env.API_BASE_URL
console.log('PATH', PATH)

export const endpoints = {
  user: {
    GET: `${PATH}/user`
  }
}

/**
 * Create an Axios Client with defaults
 */
const CSRF_TOKEN = ''
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
