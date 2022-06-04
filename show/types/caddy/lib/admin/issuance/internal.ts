export interface InternalIssuer {
  module?: 'internal' | string
  ca?: string
  lifetime?: number
  sign_with_root?: boolean
}
