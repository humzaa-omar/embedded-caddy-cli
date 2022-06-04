export interface PushHandler {
  handler?: 'push' | string
  resources?: [
    {
      method?: string
      target?: string
    },
  ]
  headers?: {
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
}
