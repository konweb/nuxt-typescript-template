export interface request {
  id: string
}

export interface GetUserResponse {
  id: string
  url: string
  name: string
  profile_image_url: string
}

export const GetUserRequest: request = {
  id: ''
}
