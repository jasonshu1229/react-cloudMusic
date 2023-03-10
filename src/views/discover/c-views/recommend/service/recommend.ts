import hyRequest from '@/service/index';

export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  });
}

export function getHotRecommend(limit = 30) {
  return hyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  });
}

// 歌曲评论
export function getComment(id = 186016, limit = 20) {
  return hyRequest.get({
    url: '/comment/music',
    params: {
      id,
      limit
    }
  });
}
