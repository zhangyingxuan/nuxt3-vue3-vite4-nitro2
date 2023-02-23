import { openPage, getDataFromPage } from '@server/utils/'
import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  console.log('req======', req);
  console.log('res======', res);
  const page = await openPage();
  const resData = await getDataFromPage(page);
  // 大盘数据：上涨指数、上涨家数，下跌家数，持平家数

  // return {
  //   someData: true,
  //   ...resData,
  // }

  res.statusCode = 200
  res.end({
    someData: true,
    ...resData,
  })
}