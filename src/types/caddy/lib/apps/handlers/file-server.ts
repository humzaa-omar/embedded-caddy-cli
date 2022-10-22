import { Encodings } from './encode'

export interface FileServer {
  handler?: 'file_server'
  root?: string
  hide?: string[]
  index_names?: string[]
  browse?: {
    template_file?: string
  }
  canonical_uris?: boolean
  status_code?: string
  pass_thru?: boolean
  precompressed?: Encodings
  precompressed_order?: string[]
}
