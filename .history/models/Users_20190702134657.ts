interface request {
  id: string
}

interface response {
  id: string
  url: string
  name: string
  profile_image_url: string
}

export let GetUserRequest: request
export let GetUserResponse: response
