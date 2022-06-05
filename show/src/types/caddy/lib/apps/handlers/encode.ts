export interface Encode {
  handler?: 'encode'
  encodings?: Encodings
  prefer?: string[]
  minimum_length?: number
  match?: {
    status_code?: number[]
    headers?: {
      [key: string]: string[]
    }
  }
}

interface GZIP {
  level?: number
}

interface ZSTD {
  [key: string]: any
}

interface NonStandardEncoding {
  [key: string]: unknown
}

export type Encodings = {
  gzip?: GZIP
  zstd?: ZSTD
  br?: NonStandardEncoding
  [key: string]: NonStandardEncoding | any
}
