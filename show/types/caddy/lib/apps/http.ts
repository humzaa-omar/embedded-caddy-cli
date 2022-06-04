import { Handlers } from './handlers/handlers'
import { ListnerWrapper } from './listener-wrappers'
import { Match } from './matchers/match'
import { TLSMatch } from './tls-match/tls-match'

export interface AppHTTP {
  http_port?: number
  https_port?: number
  grace_period?: number
  servers?: {
    [key: string]: {
      listen?: string[]
      listener_wrappers?: ListnerWrapper[]
      read_timeout?: number
      read_header_timeout?: number
      write_timeout?: number
      idle_timeout?: number
      max_header_bytes?: number
      routes?: [
        {
          group?: string
          match?: Match[]
          handle?: Handlers[]
          terminal?: boolean
        },
      ]
      errors?: {
        routes?: [
          {
            group?: string
            match?: Match[]
            handle?: Handlers[]
            terminal?: boolean
          },
        ]
      }
      tls_connection_policies?: [
        {
          match?: TLSMatch
          certificate_selection?: {
            serial_number: [
              {
                [key: string]: unknown
              },
            ]
            subject_organization?: string[]
            public_key_algorithm?: number
            any_tag?: string[]
            all_tags?: string[]
          }
          cipher_suites?: string[]
          curves?: string[]
          alpn?: string[]
          protocol_min?: string
          protocol_max?: string
          client_authentication?: {
            trusted_ca_certs?: string[]
            trusted_ca_certs_pem_files?: string[]
            trusted_leaf_certs?: string[]
            mode?: string
          }
          default_sni?: string
        },
      ]
      automatic_https?: {
        disable?: boolean
        disable_redirects?: boolean
        disable_certificates?: boolean
        skip?: string[]
        skip_certificates?: string[]
        ignore_loaded_certificates?: boolean
      }
      strict_sni_host?: boolean
      logs?: {
        default_logger_name?: string
        logger_names?: {
          [key: string]: string
        }
        skip_hosts?: string[]
        skip_unmapped_hosts?: boolean
        should_log_credentials?: boolean
      }
      experimental_http3?: boolean
      allow_h2c?: boolean
    }
  }
}
