import hyRequest from '@/service';

export function getSongUrl(id: number) {
  return hyRequest.get({
    url: `/song/url/v1?id=${id}&level=hires`
  });
}
