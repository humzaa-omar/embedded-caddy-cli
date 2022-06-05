export interface InternalIssuer {
  module?: 'internal'
  ca?: string
  lifetime?: number
  sign_with_root?: boolean
}
