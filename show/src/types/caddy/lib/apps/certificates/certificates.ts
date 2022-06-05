import { LoadFilesCert } from './load-files'
import { LoadPemCert } from './load-pem'
import { LoadStorageCert } from './load-storage'

export type AppTLSCertificates = {
  automate?: string[]
  load_files?: LoadFilesCert
  load_folders?: string[]
  load_pem?: LoadPemCert
  load_storage?: LoadStorageCert
}
