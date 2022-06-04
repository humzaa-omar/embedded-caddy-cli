import { HTTPCertGet } from './http'
import { TailscaleCertGetter } from './tailscale'

export type CertGetter = HTTPCertGet | TailscaleCertGetter
