import { MethodType } from '../types'
import { LocalStorageAccess } from './local-storage'

export interface ApiResponse<T> {
  status: boolean
  path: string
  statusCode: number
  message?: string
  result?: T
}

async function fetchAPI<T>(
  path: RequestInfo,
  config: object,
): Promise<ApiResponse<T>> {
  const BASE_API_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3080/api/v1'
      : 'prod'
  const url = BASE_API_URL + path

  const fullConfig = {
    ...config,
  }
  try {
    const res = await fetch(url, fullConfig)
    const status = res.status
    const resJson = await res.json()
    if (status >= 200 && status < 300) return resJson
    else if (status >= 400) throw new Error(resJson.message)
    else throw new Error(resJson.message)
  } catch (error) {
    console.log({ error })
    throw new Error('ERROR')
  }
}

function setConfig(method: MethodType, body?: object) {
  const token = LocalStorageAccess.getToken()
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `bearer ${token}` : '',
    },
    body: body ? JSON.stringify({ ...body }) : null,
  }
  return config
}

export async function fetchApiPost<T>(path: string, body?: object) {
  return await fetchAPI<T>(path, setConfig('POST', body))
}
export async function fetchApiPatch<T>(path: string, body?: object) {
  return await fetchAPI<T>(path, setConfig('PATCH', body))
}
export async function fetchApiPut<T>(path: string, body?: object) {
  return await fetchAPI<T>(path, setConfig('PUT', body))
}

export async function fetchApiGet<T>(path: string) {
  return await fetchAPI<T>(path, setConfig('GET'))
}
export async function fetchApiDelete<T>(path: string) {
  return await fetchAPI<T>(path, setConfig('DELETE'))
}
