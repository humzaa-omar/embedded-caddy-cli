import { ACMEServerHandler } from './acme-server'
import { Authentication } from './authentication/authentication'
import { CopyResponseHeaders } from './authentication/copy-response-headers'
import { CopyResponse } from './copy-response'
import { Encode } from './encode'
import { StaticError } from './error'
import { FileServer } from './file-server'
import { HeadersMiddleware } from './headers'
import { MapHandler } from './map'
import { MetricsHandler } from './metrics'
import { NonStandardHandlder } from './non-standard'
import { PushHandler } from './push'
import { RequestBody } from './request-body'
import { ReverseProxy } from './reverse-proxy/reverse-proxy'
import { RewriteHandler } from './rewrite'
import { StaticResponse } from './static-response'
import { Subroute } from './subroute'
import { TemplatesHandler } from './templates'
import { TracingHandler } from './tracing'
import { VarsMiddleware } from './vars'

export type Handlers =
  | NonStandardHandlder
  | StaticResponse
  | StaticError
  | Subroute
  | VarsMiddleware
  | Authentication
  | Encode
  | FileServer
  | HeadersMiddleware
  | MapHandler
  | PushHandler
  | RequestBody
  | CopyResponse
  | CopyResponseHeaders
  | ReverseProxy
  | RewriteHandler
  | TemplatesHandler
  | TracingHandler
  | ACMEServerHandler
  | MetricsHandler
