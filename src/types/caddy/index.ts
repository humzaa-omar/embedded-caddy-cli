import type { AdminConfig } from './lib/admin/admin'
import type { AppsConfig } from './lib/apps/apps'
import type { LoggingConfig } from './lib/logging/logging'
import { StorageConfig } from './lib/storage/storage'

declare namespace Caddy {
  namespace Config {
    interface Root {
      $schema?: string
      admin?: AdminConfig
      logging?: LoggingConfig
      storage?: StorageConfig
      apps?: AppsConfig
    }
    export { Root, AdminConfig, LoggingConfig, StorageConfig, AppsConfig }
  }
}

export { Caddy }
