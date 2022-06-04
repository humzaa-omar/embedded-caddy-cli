export interface VarsMiddleware {
  handler?: 'vars' | string
  [key: string]: unknown
}
