import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Random } from 'mockjs'

type Sex = 'male' | 'female' | undefined
type Role = 'admin' | 'user'

const sexArr: Sex[] = ['male', 'female', undefined]
const roleArr: Role[] = ['admin', 'user']
const hobbies: string[] = ['basketball', 'football', 'video-game']

class User {
  name: string
  sex: Sex
  hobbies: string[]
  email: string
  roles: Role[]
  constructor() {
    this.name = Random.name()
    this.sex = sexArr[Random.integer(0, 2)]
    this.hobbies = hobbies.slice(0, Random.integer(0, 3))
    this.email = Random.email()
    this.roles = roleArr.slice(Random.integer(0, 1), 2)
  }
}

export const userList = (num: number): User[] =>
  new Array(num).fill(0).map(() => new User())

export default (request: VercelRequest, response: VercelResponse): void => {
  const page = Number(request.query.page) || 1
  const size = Number(request.query.size) || 10
  const total = 65
  let num = size
  const max = Math.ceil(total / size)
  if (page === max) {
    num = total % size
  } else if (page > max) {
    num = 0
  }
  const result = {
    total,
    page,
    size,
    list: userList(num),
  }
  response.status(200).json(result)
}
