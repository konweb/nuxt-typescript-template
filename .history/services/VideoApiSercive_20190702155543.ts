import { client as httpClient, endpoints } from '../common/api'

// import models
import * from '~/models/Users.ts'

class UserApiSercive {
  // カテゴリーデータの取得
  getUser() {
    return httpClient
      .get<GetCategoriesResponse>(endpoints.categories.GET)
      .then(response => response.data.data)
  }

  // videoデータを生成
  postUser(params: FormData) {
    return httpClient
      .post<PostVideoResponse>(endpoints.video.POST, params)
      .then(response => response.data.data)
  }

  // videoデータを更新
  putUser(id: number, params: PutVideoRequest) {
    return httpClient
      .put<PutVideoResponse>(`${endpoints.video.PUT}/${id}`, params)
      .then(response => response.data.data)
  }
}

export default new VideoApiSercive()
