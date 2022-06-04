export interface RPTransportFastCGI {
  protocol?: 'fastcgi' | string
  root?: string
  split_path?: string[]
  resolve_root_symlink?: boolean
  env?: {
    [key: string]: string
  }
  dial_timeout?: number
  read_timeout?: number
  write_timeout?: number
}
