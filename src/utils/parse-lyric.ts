export interface ILyric {
  time: number;
  text: string;
}

/**
 * 把歌词字符串解析成一个个对象
 * @param lyricString 歌词字符串
 */
export function parseLyric(lyricString: string) {
  // [00:00.000] 作词 : 刘冠南
  const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

  const lineLyric: string[] = lyricString.split('\n');

  const lyrics: ILyric[] = [];
  for (const line of lineLyric) {
    // 1. 匹配结果
    const result = timeRegExp.exec(line);
    if (!result) continue;

    // 2. 获取每一组的时间
    const time1 = Number(result[1]) * 60 * 1000;
    const time2 = Number(result[2]) * 1000;
    const time3 =
      result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10;

    const time = time1 + time2 + time3;
    const text = line.replace(timeRegExp, '');

    lyrics.push({
      time,
      text
    });
  }
  return lyrics;
}
