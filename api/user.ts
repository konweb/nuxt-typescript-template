import { client as httpClient, endpoints } from './client'

// import types
import {
  GetUserResponse,
  PostUserRequest,
  PostUserResponse,
  PutUserRequest,
  PutUserResponse
} from '~/types/users/Users'

export const getUser = (id: number) => {
  return httpClient
    .get<GetUserResponse>(`${endpoints.user.GET}/${id}`)
    .then((response) => response.data.data)
}

export const postUser = (params: PostUserRequest) => {
  return httpClient
    .post<PostUserResponse>(endpoints.user.POST, params)
    .then((response) => response.data.data)
}

export const putUser = (id: number, params: PutUserRequest) => {
  return httpClient
    .put<PutUserResponse>(`${endpoints.user.PUT}/${id}`, params)
    .then((response) => response.data.data)
}