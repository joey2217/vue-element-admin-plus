import { NowRequest, NowResponse } from '@vercel/node';
import { Random } from 'mockjs';
export default (request: NowRequest, response: NowResponse) => {
  response.status(200).send(Random.guid());
};
