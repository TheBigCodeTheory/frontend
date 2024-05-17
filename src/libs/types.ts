export type MethodType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

export enum ROLE {
  'ADMIN' = 'ADMIN',
  'USER' = 'USER',
}

// entities from the backend
export interface IUser {
  id: string
  name: string
  roles: ROLE[]
}
export interface ILoginResponse {
  token: string
  user: IUser
}
