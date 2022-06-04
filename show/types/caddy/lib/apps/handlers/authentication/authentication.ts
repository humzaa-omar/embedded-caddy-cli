import { Providers } from './providers'

export interface Authentication {
  handler?: 'authentication'
  providers?: Providers
}
