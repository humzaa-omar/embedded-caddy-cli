export interface MapHandler {
  handler?: 'map' | string
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
