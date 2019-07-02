import { client as httpClient, endpoints } from '../common/api'

// import models
import { PutVideoRequest } from '../models/put-video-request'
import { GetCategoriesResponse } from '../models/get-categories-response'
import { PostVideoResponse } from '../models/post-video-response'
import { PutVideoResponse } from '../models/put-video-response'
import { GetVideoResponse } from '../models/get-video-response'
import { GetMyGroupsResponse } from '../models/get-my-groups-response'
import { GetRelatedVideosResponse } from '../models/get-related-videos-response'

class VideoApiSercive {
  // カテゴリーデータの取得
  fetchCategories() {
    return httpClient
      .get<GetCategoriesResponse>(endpoints.categories.GET)
      .then(response => response.data.data)
  }

  // videoデータを生成
  fetchVideoPost(params: FormData) {
    return httpClient
      .post<PostVideoResponse>(endpoints.video.POST, params)
      .then(response => response.data.data)
  }

  // videoデータを更新
  fetchVideoPut(id: number, params: PutVideoRequest) {
    return httpClient
      .put<PutVideoResponse>(`${endpoints.video.PUT}/${id}`, params)
      .then(response => response.data.data)
  }

  // videoデータの取得
  fetchVideoGet(id: number) {
    return httpClient
      .get<GetVideoResponse>(`${endpoints.video.GET}/${id}`)
      .then(response => response.data.data)
  }

  // 所属グループデータの取得
  fetchMyGroups() {
    return httpClient
      .get<GetMyGroupsResponse>(`${endpoints.myGroup.GET}`)
      .then(response => response.data.data)
  }

  // 手技と関連する手術動画の一覧を返すデータの取得
  fetchRelatedVideos(payload: { id: string; categoryId: string }) {
    return httpClient
      .get<GetRelatedVideosResponse>(`${endpoints.related_videos.GET}`, {
        params: payload
      })
      .then(response => response.data.data)
  }
}

export default new VideoApiSercive()
