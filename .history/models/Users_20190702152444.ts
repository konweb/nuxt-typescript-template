interface getRequest {
  id: string
}
interface getResponse {
  id: string
  url: string
  name: string
  profile_image_url: string
}
export let GetUserRequest: getRequest
export let GetUserResponse: getResponse

interface postRequest {
  id: string
}
interface postResponse {
  id: string
  url: string
  name: string
  profile_image_url: string
}
export let PostUserRequest: postRequest
export let PostUserResponse: postResponse

interface putRequest {
  id: string
}
interface putResponse {
  id: string
  url: string
  name: string
  profile_image_url: string
}
export let PutUserRequest: putRequest
export let PutUserResponse: putResponse
