export interface RPTransportHTTP {
  protocol?: 'http'
  resolver?: {
    address?: string[]
  }
  tls?: {
    root_ca_pool?: string[]
    root_ca_pem_files?: string[]
    client_certificate_file?: string
    client_certificate_key_file?: string
    client_certificate_automate?: string
    insecure_skip_verify?: boolean
    handshake_timeout?: number
    server_name?: string
  }
  keep_alive?: {
    enabled?: boolean
    probe_interval?: number
    max_idle_conns?: number
    max_idle_conns_per_host?: number
    idle_timeout?: number
  }
  compression?: boolean
  max_conns_per_host?: number
  dial_timeout?: number
  dial_fallback_delay?: number
  respone_header_timeout?: number
  expect_continue_timeout?: number
  max_response_header_size?: number
  write_buffer_size?: number
  read_buffer_size?: number
  versions: string[]
}
