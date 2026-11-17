// Finds department photos by filename. No per-image entries needed.
// Matches: 2A.jpg, 2A.jpeg, 2A-0.jpg, 2A-1.jpeg, ...
const files = import.meta.glob('/src/assets/dept-photos/*.{jpg,jpeg,JPG,JPEG}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const MAX_IMAGES = 3   // how many to show in the popup

// "2A-1.jpeg" -> id "2A", order 1 | "2A.jpg" -> id "2A", order -1 (unnumbered goes first)
const FILE_RE = /^([^-]+)(?:-(\d+))?\.jpe?g$/i

const byDept = {}
for (const [path, url] of Object.entries(files)) {
  const match = FILE_RE.exec(path.split('/').pop())
  if (!match) continue                       // ignore files that don't fit the pattern
  const id = match[1].toUpperCase()
  const order = match[2] === undefined ? -1 : Number(match[2])
  ;(byDept[id] ??= []).push({ order, url })
}

for (const list of Object.values(byDept)) {
  list.sort((a, b) => a.order - b.order)
}

export function getDeptImages(id) {
  return (byDept[id.toUpperCase()] ?? []).slice(0, MAX_IMAGES).map((item) => item.url)
}