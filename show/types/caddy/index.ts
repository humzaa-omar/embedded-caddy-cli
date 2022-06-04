import type { AdminConfig } from './lib/admin/admin'
import type { AppsConfig } from './lib/apps/apps'
import type { LoggingConfig } from './lib/logging/logging'

import { StorageConfig } from './lib/storage/storage'
export declare interface CaddyJSON {
  admin?: AdminConfig
  logging?: LoggingConfig
  storage?: StorageConfig
  apps?: AppsConfig
}
