import { LogWriters } from './writers/writers'
import { LogEncoders } from './encoders/encoders'

export interface LoggingConfig {
  sink?: {
    writer?: LogWriters
  }
  logs?: {
    [key: string]: {
      writer?: LogWriters
      encoder?: LogEncoders

      level?: string
      sampling?: {
        interval?: number
        first?: number
        thereafter?: number
      }
      include?: string[]
      exclude?: string[]
    }
  }
}
