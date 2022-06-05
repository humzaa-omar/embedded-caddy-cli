export interface RewriteHandler {
  handler?: 'rewrite'
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
