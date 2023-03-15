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

export function formatTime(time: number) {
  // 269026
  // 把毫秒转换成秒钟
  const timeSeconds = time / 1000;
  // 把秒钟转换成分钟
  const minute = Math.floor(timeSeconds / 60);
  const second = Math.floor(timeSeconds) % 60;

  // if (minute < 10 && second < 10) {
  //   return `0${minute}:0${second}`;
  // }

  // if (minute < 10 || second < 10) {
  //   if (minute < 10) {
  //     return `0${minute}:${second}`;
  //   } else {
  //     return `${minute}:0${second}`;
  //   }
  // }
  const formatMinute = minute.toString().padStart(2, '0');
  const formatSecond = second.toString().padStart(2, '0');

  return `${formatMinute}:${formatSecond}`;
}

export function getSongPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
