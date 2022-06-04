import flush from '@oclif/core/flush'
//  @ts-expect-error No Types
import handle from '@oclif/core/handle'
import * as oclif from '@oclif/core'

oclif.run().then(flush).catch(handle)

// export { run } from '@oclif/core'
