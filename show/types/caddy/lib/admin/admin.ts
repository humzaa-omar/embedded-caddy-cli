import { Issuance } from './issuance/issuance'

export interface AdminConfig {
  disabled?: boolean
  listen?: string
  enforce_origin?: boolean
  origins?: string[]
  config?: {
    persist?: boolean
    load?: {
      module?: 'http'
      method?: string
      url?: string
      header?: {
        [key: string]: string[]
      }
      timeout?: number
      tls?: {
        use_server_identity?: boolean
        client_certificate_file?: string
        client_certificate_key_file?: string
        root_ca_pem_files?: string[]
      }
    }
  }
  identity?: {
    identifiers?: string[]
    issuers?: Issuance[]
  }
  remote?: {
    listen?: string
    access_control?: [
      {
        public_keys?: string[]
        permissions?: [
          {
            paths?: string[]
            methods?: string[]
          },
        ]
      },
    ]
  }
}
