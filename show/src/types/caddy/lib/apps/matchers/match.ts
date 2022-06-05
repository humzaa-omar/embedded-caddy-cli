import { MatchFile } from './file'
import { MatchHeader, MatchHeaderRE } from './header'
import { MatchRemoteIP } from './ip'
import { NonStandardMatcher } from './non-standard'
import { MatchPathRE } from './path'
import { MatchVarsRE } from './vars'

export interface Match {
  header?: MatchHeader
  header_regexp?: MatchHeaderRE
  host?: string[]
  method?: string[]
  not?: [{ [key: string]: any }]
  path?: string[]
  path_regexp?: MatchPathRE
  protocol?: string
  query?: { [key: string]: string[] }
  remote_ip?: MatchRemoteIP
  vars_regexp?: MatchVarsRE
  vars?: { [key: string]: string }
  file?: MatchFile
  [key: string]: NonStandardMatcher | any
}
