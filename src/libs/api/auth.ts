import { fetchApiPost } from '.'
import { ILoginResponse } from '../types'

export class AuthAPI {
  static async login(email: string, code: string) {
    return await fetchApiPost<ILoginResponse>('/auth/token', { email, code })
  }
}
