interface ID {
  id: string
}

interface User {
  id: ID
  url: string
  name: string
  profile_image_url: string
}

/**
 * GET
 */
export interface GetUserRequest {
  query: ID
}
export interface GetUserResponse {
  data: User
}
// export let GetUserRequest: getRequest
// export let GetUserResponse: getResponse

/**
 * POST
 */
interface postRequest {
  query: ID
}
interface postResponse {
  data: User
}
export let PostUserRequest: postRequest
export let PostUserResponse: postResponse

/**
 * PUT
 */
interface putRequest {
  query: User
}
interface putResponse {
  data: User
}
export let PutUserRequest: putRequest
export let PutUserResponse: putResponse
