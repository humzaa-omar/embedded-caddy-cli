import { LogFilters } from '../filters/filters'

export type LogEncoders =
  | ConsoleEncoder
  | JSONEncoder
  | LogfmtEncoder
  | FilterEncoder
  | SingleFieldEncoder
  | NonStandardEncoder

export interface NonStandardEncoder {
  [key: string]: unknown
}

export interface ConsoleEncoder {
  format?: 'console' | string
  message_key?: string
  level_key?: string
  time_key?: string
  name_key?: string
  caller_key?: string
  stacktrace_key?: string
  line_ending?: string
  time_format?: string
  duration_format?: string
  level_format: string
}

export interface JSONEncoder {
  format?: 'json' | string
  message_key?: string
  level_key?: string
  time_key?: string
  name_key?: string
  caller_key?: string
  stacktrace_key?: string
  line_ending?: string
  time_format?: string
  duration_format?: string
  level_format?: string
}

/**
 * @deprecated Do not use. It will eventually be removed from the standard Caddy modules. For more information, see https://github.com/caddyserver/caddy/issues/3575.
 */
export interface LogfmtEncoder {
  format?: 'logfmt' | string
  message_key?: string
  level_key?: string
  time_key?: string
  name_key?: string
  caller_key?: string
  stacktrace_key?: string
  line_ending?: string
  time_format?: string
  duration_format?: string
  level_format?: string
}

export interface FilterEncoder {
  format?: string
  wrap?: LogEncoders
  fields?: LogFilters
}

export interface SingleFieldEncoder {
  format?: 'single_field' | string
  field?: string
  fallback?:
    | ConsoleEncoder
    | JSONEncoder
    | LogfmtEncoder
    | FilterEncoder
    | { [key: string]: unknown }
}
