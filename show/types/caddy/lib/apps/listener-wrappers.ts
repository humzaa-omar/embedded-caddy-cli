export interface HTTPRedirectListenerWrapper {
  wrapper?: 'http_redirect' | string
}

export interface TLSPlaceholderWrapper {
  wrapper?: 'tls' | string
}

export interface NonStandardWrapper {
  [key: string]: unknown
}

export type ListnerWrapper =
  | HTTPRedirectListenerWrapper
  | TLSPlaceholderWrapper
  | NonStandardWrapper
