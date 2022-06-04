/**
 * `MatchExpression` matches requests by evaluating a [CEL](https://github.com/google/cel-spec) expression. This enables complex logic to be expressed using a comfortable, familiar syntax. Please refer to [the standard definitions of CEL functions and operators](https://github.com/google/cel-spec/blob/master/doc/langdef.md#standard-definitions).
 *
 * This matcher's JSON interface is actually a string, not a struct. The generated docs are not correct because this type has custom marshaling logic.
 *
 * *COMPATIBILITY NOTE: This module is still experimental and is not subject to Caddy's compatibility guarantee.*
 *
 * https://caddyserver.com/docs/json/apps/http/servers/errors/routes/match/expression/
 */
export interface MatchExpression {
  [key: string]: any
}
