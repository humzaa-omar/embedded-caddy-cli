export interface HeadersMiddleware {
  handler?: 'headers'
  request?: {
    add?: {
      [key: string]: string[]
    }
    set?: {
      [key: string]: string[]
    }
    delete?: string[]
    replace?: {
      [key: string]: [
        {
          search?: string
          search_regexp?: string
          replace?: string
        },
      ]
    }
  }
  response?: {
    add?: {
      [key: string]: string[]
    }
    set?: {
      [key: string]: string[]
    }
    delete?: string[]
    replace?: {
      [key: string]: [
        {
          search?: string
          search_regexp?: string
          replace?: string
        },
      ]
    }
    require?: {
      status_code?: number[]
      headers?: {
        [key: string]: string[]
      }
    }
    deferred?: boolean
  }
}
