/* eslint-disable operator-linebreak */
import { Command, Flags } from '@oclif/core'
import fs from 'node:fs'
import YAML from 'yaml'
import { Caddy } from '../../types/caddy'

export default class All extends Command {
  static description = 'Output Entire Config to console'

  static examples = ['$ show all']

  static flags = {
    // flag with a value (-n, --name=VALUE)
    config: Flags.string({ char: 'c', description: 'Config file to use' }),
    json: Flags.boolean({ char: 'j', description: 'Output JSON' }),
    'no-pretty': Flags.boolean(),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(All)

    const data = fs.readFileSync('./conf.json', 'utf-8')
    const confJSON: Caddy.Config.Root = JSON.parse(data)
    delete confJSON.$schema
    const confYAML = YAML.stringify(confJSON)
    this.log(
      flags.json
        ? JSON.stringify(confJSON, null, flags['no-pretty'] ? 0 : 2)
        : confYAML,
    )
  }
}
