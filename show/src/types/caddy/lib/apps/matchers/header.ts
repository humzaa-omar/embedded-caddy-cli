
export interface MatchHeader {
  [key: string]: string[] | null
}

export interface MatchHeaderRE {
  [key: string]: {

    name?: string

    pattern?: string
  }
}
