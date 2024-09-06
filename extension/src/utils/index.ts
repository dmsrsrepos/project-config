import { defineLogger } from 'reactive-vscode'
import * as meta from '@/generated-meta'

export const logger = defineLogger(meta.name)
