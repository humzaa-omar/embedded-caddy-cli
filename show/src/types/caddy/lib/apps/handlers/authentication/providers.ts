import { HTTPBasicAuth } from './http-basic'
import { NonStandardProvider } from './non-standard'

export type Providers = {
  http_basic?: HTTPBasicAuth
  [key: string]: NonStandardProvider | any
}
