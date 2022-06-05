export interface HTTPRedirectListenerWrapper {
  wrapper?: 'http_redirect'
}

export interface TLSPlaceholderWrapper {
  wrapper?: 'tls'
}

export interface NonStandardWrapper {
  [key: string]: unknown
}

export type ListnerWrapper =
  | HTTPRedirectListenerWrapper
  | TLSPlaceholderWrapper
  | NonStandardWrapper
