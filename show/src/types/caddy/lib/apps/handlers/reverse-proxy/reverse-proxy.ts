import { Match } from '../../matchers/match'
import { Handlers } from '../handlers'
import { DynamicUpstreams } from './dynamic-upstreams/dynamic-upstreams'
import { SelectionPolicy } from './selection-policy/selection-policy'
import { Transport } from './transport/transport'

export interface ReverseProxy {
  handler?: 'reverse_proxy'
  transport?: Transport
  circuit_breaker?: unknown
  load_balancing?: {
    selection_policy?: SelectionPolicy
    try_duration?: number
    try_interval?: number
    retry_match?: Match[]
  }
  health_checks?: {
    active?: {
      path?: string
      uri?: string
      port?: number
      headers?: {
        [key: string]: string[]
      }
      interval?: number
      timeout?: number
      max_size?: number
      expect_status?: number
      expect_body?: string
    }
    passive?: {
      fail_duration?: number
      max_fails?: number
      unhealthy_request_count?: number
      unhealthy_status?: number[]
      unhealthy_latency?: number
    }
  }
  upstreams?: [
    {
      dial?: string
      lookup_srv?: string
      max_requests?: number
    },
  ]
  dynamic_upstreams?: DynamicUpstreams
  flush_interval?: number
  trusted_proxies?: string[]
  headers?: {
    request?: {
      add?: {
        [key: string]: string[]
      }
      set?: {
        [key: string]: string[]
      }
      delete?: string[]
      replace?: {
        [key: string]: [
          {
            search?: string
            search_regexp?: string
            replace?: string
          },
        ]
      }
    }
    response?: {
      add?: {
        [key: string]: string[]
      }
      set?: {
        [key: string]: string[]
      }
      delete?: string[]
      replace?: {
        [key: string]: [
          {
            search?: string
            search_regexp?: string
            replace?: string
          },
        ]
      }
      require?: {
        status_code?: number[]
        headers?: {
          [key: string]: string[]
        }
      }
      deferred?: boolean
    }
  }
  buffer_requests?: boolean
  buffer_responses?: boolean
  max_buffer_size?: number
  rewrite?: {
    method?: string
    uri?: string
    strip_path_prefix?: string
    strip_path_suffix?: string
    uri_substring?: [
      {
        find?: string
        replace?: string
        limit?: number
      },
    ]
    path_regexp?: [
      {
        find?: string
        replace?: string
      },
    ]
  }
  handle_response?: [
    {
      match?: {
        status_code?: number[]
        headers?: {
          [key: string]: string[]
        }
      }
      status_code?: string
      routes?: [
        {
          group?: string
          match?: Match[]
          handle?: Handlers[]
          terminal?: boolean
        },
      ]
    },
  ]
}
