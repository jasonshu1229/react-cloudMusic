import hyRequest from '@/service/index';

export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  });
}
