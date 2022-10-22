export interface LoadStorageCert {
  pairs?: [
    {
      certificate?: string
      key?: string
      format?: string
      tags?: string[]
    },
  ]
}
