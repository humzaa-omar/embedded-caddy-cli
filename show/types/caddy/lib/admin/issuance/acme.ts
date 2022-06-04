export interface ACMEIssuer {
  module?: 'acme' | string
  ca?: string
  test_ca?: string
  email?: string
  account_key?: string
  external_account?: {
    key_id?: string
    mac_key?: string
  }

  acme_timeout?: number
  challenges?: {
    http?: {
      disabled?: boolean
      alternate_port?: number
    }
    'tls-alpn'?: {
      disabled?: boolean
      alternate_port?: number
    }
    dns?: {
      provider?: { [key: string]: string }
      ttl?: number
      propagation_delay?: number
      propagation_timeout?: number
      resolvers?: string[]
      override_domain?: string
    }
    bind_host?: string
  }
  trusted_roots_pem_files?: string[]
  preferred_chains?: {
    smallest?: boolean
    root_common_name?: string[]
    any_common_name?: string[]
  }
}
