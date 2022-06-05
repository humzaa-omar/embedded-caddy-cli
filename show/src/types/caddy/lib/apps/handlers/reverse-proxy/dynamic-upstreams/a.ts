export interface ALookup {
  source?: 'a'
  name?: string
  port?: string
  refresh?: number
  resolver?: {
    addresses?: string[]
  }
  dial_timeout?: number
  dial_fallback_delay?: number
}
