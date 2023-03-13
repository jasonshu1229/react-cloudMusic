export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万';
  } else {
    return count + '万';
  }
}

export function formatImgUrlSize(
  url: string,
  width: number,
  height: number = width
) {
  return url + `?param=${width}y${height}`;
}
