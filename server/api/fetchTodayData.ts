import { openPage, getDataFromPage } from '@/server/utils'
import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const page = await openPage('https://nuxt.com/docs/guide/directory-structure/layouts');
  const resData = await getDataFromPage(page);
  // 大盘数据：上涨指数、上涨家数，下跌家数，持平家数

  return {
    someData: true,
    ...resData,
  }
}