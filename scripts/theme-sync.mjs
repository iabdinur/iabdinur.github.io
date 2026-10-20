// Keeps this site's Chakra theme identical to the blog's, which is the source of truth.
//
//   node scripts/theme-sync.mjs <local theme path>          exit 1 if it differs from the blog's
//   node scripts/theme-sync.mjs <local theme path> --write  overwrite it with the blog's
//
// Reads the blog's theme from a sibling checkout (../blog) when there is one, so unpushed
// edits are picked up; otherwise from the blog repo's main branch on GitHub.
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SIBLING = resolve('../blog/frontend/src/theme/index.ts')
const REMOTE = 'https://raw.githubusercontent.com/iabdinur/blog/main/frontend/src/theme/index.ts'

const [localPath, flag] = process.argv.slice(2)
if (!localPath) {
  console.error('usage: node scripts/theme-sync.mjs <local theme path> [--write]')
  process.exit(2)
}

let source, canonical
if (existsSync(SIBLING)) {
  source = SIBLING
  canonical = readFileSync(SIBLING, 'utf8')
} else {
  source = REMOTE
  const res = await fetch(REMOTE)
  if (!res.ok) {
    console.error(`theme: could not fetch ${REMOTE} (HTTP ${res.status})`)
    process.exit(2)
  }
  canonical = await res.text()
}

const local = existsSync(localPath) ? readFileSync(localPath, 'utf8') : ''

if (local === canonical) {
  console.log(`theme: ${localPath} matches ${source}`)
} else if (flag === '--write') {
  writeFileSync(localPath, canonical)
  console.log(`theme: updated ${localPath} from ${source}`)
} else {
  console.error(`theme: ${localPath} differs from ${source}`)
  console.error('theme: run `npm run theme:sync` to copy the blog theme here')
  process.exit(1)
}
