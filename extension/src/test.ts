const configsObject = {
  'xxx': {
    default: true,
    description: 'Enabled project-kit inline annotations',
    type: 'boolean',
  },
  'project-kit.test.annotations': {
    default: true,
    description: 'Enabled project-kit inline annotations',
    type: 'boolean',
  },
  'project-kit.test.color': {
    default: 'auto',
    description: 'Icon color hex for inline displaying',
    type: 'string',
  },
  'project-kit.test': {
    default: 'auto',
    description: 'Icon color hex for inline displaying',
    type: 'string',
  },
}
const root = ''
const scopeKeys = Array.from(Object.keys(configsObject).reduce((acc, curr) => {
  const parts = curr.split('.')
  if (parts.length > 1) {
    const scopeParts = parts.slice(0, -1)
    for (let i = 0; i < scopeParts.length; i++) {
      acc.add(scopeParts.slice(0, i + 1).join('.'))
    }
  }
  else {
    acc.add(root)
  }
  return acc
}, new Set<string>()))
console.log(scopeKeys)
const scopeConfPairs = scopeKeys.reduce((acc, scope) => {
  if (scope === root) {
    acc.set(scope, Object.entries(configsObject).filter(([key]) => !key.includes('.')))
  }
  else {
    const conf = Object.entries(configsObject).filter(([key]) => key.startsWith(`${scope}.`))
    acc.set(scope, conf)
  }
  return acc
}, new Map<string, [string, any][]>())

console.log(scopeConfPairs)
