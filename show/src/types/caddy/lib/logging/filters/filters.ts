export type LogFilters =
  | CookieFilter
  | DeleteFilter
  | HashFilter
  | IPMaskFilter
  | QueryFilter
  | RegexpFilter
  | RenameFilter
  | ReplaceFilter
  | NonStandardFilter

export interface NonStandardFilter {
  [key: string]: unknown
}

export interface CookieFilter {
  filter?: 'cookie'
  actions?: [
    {
      type?: 'replace' | 'hash' | 'delete'
      name?: string
      value?: string
    },
  ]
}

export interface DeleteFilter {
  filter?: 'delete'
}

export interface HashFilter {
  filter?: 'hash'
}

export interface IPMaskFilter {
  filter?: 'ip_mask'

  ipv4_cidr?: number

  ipv6_cidr?: number
}

export interface QueryFilter {
  filter?: 'query'
  actions?: [
    {
      type?: 'replace' | 'hash' | 'delete'
      name?: string
      value?: string
    },
  ]
}

export interface RegexpFilter {
  filter?: 'regexp'
  regexp?: string
  value?: string
}

export interface RenameFilter {
  filter?: 'rename'
  name?: string
}

export interface ReplaceFilter {
  filter?: 'replace'
  value?: string
}
