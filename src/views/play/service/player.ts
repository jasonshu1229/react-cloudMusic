import hyRequest from '@/service';

export function getSongUrl(id: number) {
  return hyRequest.get({
    url: `/song/url/v1?id=${id}&level=hires`
  });
}

export function getSongDetail(ids: number) {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  });
}

export function getSongLyric(id: number) {
  return hyRequest.get({
    url: '/lyric',
    params: {
      id
    }
  });
}

export function getLoginKey() {
  return hyRequest.get({
    url: '/login/qr/key'
  });
}

export function createCodeImg(key = 'd24010b0-e5bc-4f54-941d-61cfd68a4ba6') {
  return hyRequest.get({
    url: '/login/qr/create',
    params: {
      key
    }
  });
}
