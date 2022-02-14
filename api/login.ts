import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Random } from 'mockjs'

export default (req: VercelRequest, response: VercelResponse): void => {
  const token = Random.guid()
  response.setHeader(
    'Set-Cookie',
    `access-token=${token}; HttpOnly;Max-Age=${7 * 24 * 60 * 60} `
  )
  response.status(200).send('success!')
}
