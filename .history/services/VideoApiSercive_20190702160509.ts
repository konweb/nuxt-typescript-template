import { client as httpClient, endpoints } from '../common/api'

// import models
import {GetUserResponse,PostUserRequest,PostUserResponse,PutUserRequest,PutUserResponse} from '~/models/Users.ts'

class UserApiSercive {
  // カテゴリーデータの取得
  getUser() {
    return httpClient
      .get<GetUserResponse>(endpoints.user.GET)
      .then(response => response.data.data)
  }

  // videoデータを生成
  postUser(params: PostUserRequest) {
    return httpClient
      .post<PostUserResponse>(endpoints.user.POST, params)
      .then(response => response.data.data)
  }

  // videoデータを更新
  putUser(params: PutUserRequest) {
    return httpClient
      .put<PutUserResponse>(`${endpoints.user.PUT}/${id}`, params)
      .then(response => response.data.data)
  }
}

export default new UserApiSercive()