import { Providers } from './providers'

export interface Authentication {
  handler?: 'authentication' | string
  providers?: Providers
}
