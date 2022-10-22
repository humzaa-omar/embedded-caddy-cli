import { RPTransportFastCGI } from './fastcgi'
import { RPTransportHTTP } from './http'
import { RPTransportNonSTD } from './non-standard'

export type Transport = RPTransportHTTP | RPTransportFastCGI | RPTransportNonSTD
