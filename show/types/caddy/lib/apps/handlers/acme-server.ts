export interface ACMEServerHandler {
  handler?: 'acme_server' | string
  ca?: string
  host?: string
  path_prefix?: string
  sign_with_root?: boolean
}
