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
  filter?: 'cookie' | string
  actions?: [
    {
      type?: 'replace' | 'hash' | 'delete' | string
      name?: string
      value?: string
    },
  ]
}

export interface DeleteFilter {
  filter?: 'delete' | string
}

export interface HashFilter {
  filter?: 'hash' | string
}

export interface IPMaskFilter {
  filter?: 'ip_mask' | string

  ipv4_cidr?: number

  ipv6_cidr?: number
}

export interface QueryFilter {
  filter?: 'query' | string
  actions?: [
    {
      type?: 'replace' | 'hash' | 'delete' | string
      name?: string
      value?: string
    },
  ]
}

export interface RegexpFilter {
  filter?: 'regexp' | string
  regexp?: string
  value?: string
}

export interface RenameFilter {
  filter?: 'rename' | string
  name?: string
}

export interface ReplaceFilter {
  filter?: 'replace' | string
  value?: string
}
