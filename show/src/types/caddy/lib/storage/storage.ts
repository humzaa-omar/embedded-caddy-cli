export interface FileStorage {
  module?: 'file_system'

  root?: string
}

export interface NonStandardStorage {
  [key: string]: unknown
}

export type StorageConfig = FileStorage | NonStandardStorage
