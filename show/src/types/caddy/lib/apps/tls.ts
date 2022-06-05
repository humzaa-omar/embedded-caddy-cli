import { Issuance } from '../admin/issuance/issuance'
import { StorageConfig } from '../storage/storage'
import { AppTLSCertificates } from './certificates/certificates'
import { CertGetter } from './get-certificate/certificate-getters'
import { STEK } from './stek/stek'

export interface AppTLS {
  certificates?: AppTLSCertificates
  automation?: {
    policies?: [
      {
        subjects?: string[]
        issuers?: Issuance[]
        get_certificate?: CertGetter[]
        must_staple?: boolean
        renewal_window_ratio?: number
        key_type?: string
        storage?: StorageConfig
        on_demand?: boolean
        disable_ocsp_stapling?: boolean
        ocsp_overrides?: {
          [key: string]: string
        }
      },
    ]
    on_demand?: {
      rate_limit?: {
        interval?: number
        burst?: number
      }
      ask?: string
    }
    ocsp_interval?: number
    renew_interval?: number
    storage_clean_interval?: number
  }
  session_tickets?: {
    key_source?: STEK
    rotation_interval?: number
    max_keys?: number
    disable_rotation?: boolean
    disabled?: boolean
  }
  cache?: {
    capacity?: number
  }
  disable_ocsp_stapling?: boolean
}
