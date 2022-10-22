import { StorageConfig } from '../storage/storage'

export interface AppPKI {
  certificate_authorities?: {
    [key: string]: {
      name?: string
      root_common_name?: string
      intermediate_common_name?: string
      install_trust?: boolean
      root: {
        certificate?: string
        private_key?: string
        format?: string
      }
      intermediate?: {
        certificate?: string
        private_key?: string
        format?: string
      }
      storage?: StorageConfig
    }
  }
}
