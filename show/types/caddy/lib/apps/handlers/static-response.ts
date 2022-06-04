export interface StaticResponse {
  handler?: 'static_response' | string
  status_code?: string
  headers?: { [key: string]: string[] }
  body?: string
  close?: boolean
  abort?: boolean
}
