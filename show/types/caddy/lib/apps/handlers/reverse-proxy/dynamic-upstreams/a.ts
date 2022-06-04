export interface ALookup {
  source?: 'a' | string
  name?: string
  port?: string
  refresh?: number
  resolver?: {
    addresses?: string[]
  }
  dial_timeout?: number
  dial_fallback_delay?: number
}
