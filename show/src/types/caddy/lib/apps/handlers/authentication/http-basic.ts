export interface HTTPBasicAuth {
  hash?: null
  accounts?: [
    {
      username?: string
      password?: string
      salt?: string
    },
  ]
  realm?: string
  hash_cache?: {
    [key: string]: unknown
  }
}
