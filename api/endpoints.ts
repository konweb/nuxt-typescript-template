/**
 * api endpoints
 */
const PATH = process.env.API_BASE_URL

export default {
  user: {
    GET: `${PATH}/user`,
    POST: `${PATH}/user`,
    PUT: `${PATH}/user`
  }
}
