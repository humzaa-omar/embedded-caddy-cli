import { StorageConfig } from '../../storage/storage'

export interface DistributedKey {
  provider?: 'distributed'
  storage?: StorageConfig
}
