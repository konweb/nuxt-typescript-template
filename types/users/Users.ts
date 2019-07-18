interface ID {
  id: string
}

export interface User {
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

/**
 * POST
 */
export interface PostUserRequest {
  query: ID
}
export interface PostUserResponse {
  data: User
}

/**
 * PUT
 */
export interface PutUserRequest {
  query: User
}
export interface PutUserResponse {
  data: User
}
