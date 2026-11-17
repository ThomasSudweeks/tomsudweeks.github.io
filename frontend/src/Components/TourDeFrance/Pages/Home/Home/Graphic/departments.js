// Reads every svg in the folder as text, pulls out the path data. Runs once.
const files = import.meta.glob('/src/assets/depts/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export const MAP_W = 612.3844
export const MAP_H = 584.36005

const parser = new DOMParser()

export const departments = Object.entries(files).map(([file, text]) => {
  const id = file.split('/').pop().replace('.svg', '')
  const paths = [...parser.parseFromString(text, 'image/svg+xml').querySelectorAll('path')]
  return {
    id,
    name: paths[0]?.getAttribute('title') ?? id,
    ds: paths.map((p) => p.getAttribute('d')),
  }
})