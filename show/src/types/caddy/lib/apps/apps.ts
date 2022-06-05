import { AppHTTP } from './http'
import { AppPKI } from './pki'
import { AppTLS } from './tls'

export type AppsConfig = {
  http?: AppHTTP
  pki?: AppPKI
  tls?: AppTLS
  [key: string]: unknown
}
