import { Match } from '../matchers/match'
import { Handlers } from './handlers'

export interface Subroute {
  handler?: 'subroute'
  routes?: [
    {
      group?: string
      match?: Match[]
      handle?: Handlers[]
      terminal?: boolean
    },
  ]
  errors?: {
    routes?: [
      {
        group?: string
        match?: Match[]
        handle?: Handlers[]
        terminal?: boolean
      },
    ]
  }
}
