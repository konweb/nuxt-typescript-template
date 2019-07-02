interface request {
  id: string
}

interface response {
  id: string
  url: string
  name: string
  profile_image_url: string
}

export var GetUserRequest: request
export var GetUserResponse: response
