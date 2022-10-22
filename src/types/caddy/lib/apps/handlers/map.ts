export interface MapHandler {
  handler?: 'map'
  source?: string
  destination?: string[]
  mappings?: [
    {
      input?: string
      input_regexp?: string
      outputs?: unknown[]
    },
  ]
  defaults?: string[]
}
