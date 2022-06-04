import { RemoteIPTLSMatcher } from './remote-ip'

export type TLSMatch = {
  remote_ip?: RemoteIPTLSMatcher
  sni?: string[]
  [key: string]: unknown
}
