import { Command } from '@oclif/core'
import fs from 'node:fs'

export default class Caddyfile extends Command {
  static description = 'Output Caddyfile to console'

  static examples = ['$ show caddyfile']

  async run(): Promise<void> {
    const data = fs.readFileSync('./Caddyfile', 'utf-8')
    this.log(data)
  }
}
