export interface GetUser {
  request: {
    id: string
  }
  response: {
    id: string
    url: string
    name: string
    profile_image_url: string
  }
}
