import axios, { type AxiosError } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.DEV
    ? 'https://vue-element-admin-plus.vercel.app/api/'
    : '/api/',
  withCredentials: true,
  // timeout: 1000,
})

request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    handleErrors(error)
    return Promise.reject(error)
  }
)

function handleErrors(error: AxiosError) {
  if (error.response) {
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    console.error(error.request)
  } else {
    console.error('Error', error.message)
  }
  // console.error(error.config)
  console.error('Error', error.toJSON())
}

export default request
