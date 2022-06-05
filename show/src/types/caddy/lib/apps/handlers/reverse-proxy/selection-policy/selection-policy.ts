import { CookieSelectionPolicy } from './cookie'
import { FirstSelectionPolicy } from './first'
import { HeaderSelectionPolicy } from './header'
import { IPHashSelectionPolicy } from './ip-hash'
import { LeastConnSelectionPolicy } from './least-conn'
import { RandomSelectionPolicy } from './random'
import { RandomChooseSelectionPolicy } from './random-choose'
import { RoundRobinSelectionPolicy } from './round-robin'
import { URIHashSelectionPolicy } from './uri-hash'

export type SelectionPolicy =
  | CookieSelectionPolicy
  | FirstSelectionPolicy
  | HeaderSelectionPolicy
  | IPHashSelectionPolicy
  | LeastConnSelectionPolicy
  | RandomChooseSelectionPolicy
  | RandomSelectionPolicy
  | RoundRobinSelectionPolicy
  | URIHashSelectionPolicy
