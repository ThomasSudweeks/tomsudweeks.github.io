import './TourPhotos.css'

import { useLocation } from 'react-router-dom';

import Header from '../../Components/Header/Header'
import CustomScrollbar from '../../Components/CustomScrollBar/CustomScrollBar';

// Vite: grabs every jpeg in the folder at build time, no matter how many there are.
// The glob pattern must be a string literal (it can't be built from a variable).
const modules = import.meta.glob(
  '../../../../assets/fromage-paris/*.{jpg,jpeg,JPG,JPEG}',
  { eager: true, query: '?url', import: 'default' }
)

const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => ({ src, name: path.split('/').pop() }))

function TourPhotos() {
  const { pathname } = useLocation()

  return (
    <>
      <Header />
      <CustomScrollbar />

      <main className={`page-scroll ${
        pathname.startsWith("/tdf") ? "department-scroll" : ""
      }`}>
        <div className="photos-bg" />

        <section className="photos-frame">
          <div className="photos-grid">
            {photos.map(({ src, name }) => (
              <img
                key={name}
                src={src}
                alt={name}
                loading="lazy"
                className="photos-item"
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default TourPhotos