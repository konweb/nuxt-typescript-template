import { client as httpClient } from '~/api/client'
import endpoints from '~/api/endpoints'

// import types
import {
  GetUserResponse,
  PostUserRequest,
  PostUserResponse,
  PutUserRequest,
  PutUserResponse
} from '~/types/users/Users'

export default ({ app }, inject) => {
  inject('userApi', {
    get(id: number) {
      return httpClient
        .get<GetUserResponse>(`${endpoints.user.GET}/${id}`)
        .then((response) => response.data.data)
    },

    post(params: PostUserRequest) {
      return httpClient
        .post<PostUserResponse>(endpoints.user.POST, params)
        .then((response) => response.data.data)
    },

    put(id: number, params: PutUserRequest) {
      return httpClient
        .put<PutUserResponse>(`${endpoints.user.PUT}/${id}`, params)
        .then((response) => response.data.data)
    }
  })
}
