import { client as httpClient, endpoints } from './client'

// import models
import {
  GetUserResponse,
  PostUserRequest,
  PostUserResponse,
  PutUserRequest,
  PutUserResponse
} from '~/models/users/Users'

class UserApiSercive {
  getUser(id: number) {
    return httpClient
      .get<GetUserResponse>(`${endpoints.user.GET}/${id}`)
      .then((response) => response.data.data)
  }

  postUser(params: PostUserRequest) {
    return httpClient
      .post<PostUserResponse>(endpoints.user.POST, params)
      .then((response) => response.data.data)
  }

  putUser(id: number, params: PutUserRequest) {
    return httpClient
      .put<PutUserResponse>(`${endpoints.user.PUT}/${id}`, params)
      .then((response) => response.data.data)
  }
}

export default new UserApiSercive()
