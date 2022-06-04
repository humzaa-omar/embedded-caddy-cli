export interface SRVLookup {
  source?: 'srv'
  service?: string
  proto?: string
  name?: string
  refresh?: number
  resolver?: {
    addresses?: string[]
  }
  dial_timeout?: number
  dial_fallback_delay?: number
}
