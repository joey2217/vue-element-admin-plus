import { VercelRequest, VercelResponse } from '@vercel/node'
import { Random } from 'mockjs'
export default (req: VercelRequest, response: VercelResponse): void => {
  response.status(200).send(Random.guid())
}
