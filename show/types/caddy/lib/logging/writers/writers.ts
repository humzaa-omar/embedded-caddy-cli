export type LogWriters =
  | DiscardWriter
  | FileWriter
  | StdoutWriter
  | StderrWriter
  | NetWriter
  | NonStandardWriter

export interface DiscardWriter {
  output?: 'discard' | string
}

export interface StderrWriter {
  output?: 'stderr' | string
}

export interface StdoutWriter {
  output?: 'stdout' | string
}

export interface FileWriter {
  output?: 'file' | string
  filename?: string
  roll?: boolean
  roll_size_mb?: number
  roll_gzip?: boolean
  roll_local_time?: boolean
  roll_keep?: number
  roll_keep_days?: number
}

export interface NetWriter {
  output?: 'net' | string
  address?: string
  dial_timeout?: number
}

export interface NonStandardWriter {
  [key: string]: unknown
}
