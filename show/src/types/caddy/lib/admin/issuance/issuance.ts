import { ACMEIssuer } from './acme'
import { InternalIssuer } from './internal'
import { ZeroSSLIssuer } from './zerossl'

export type Issuance = ACMEIssuer | ZeroSSLIssuer | InternalIssuer
