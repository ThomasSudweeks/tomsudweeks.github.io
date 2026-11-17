import { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './DeptPopup.css'

const GAP = 16      // distance from the cursor
const MARGIN = 12   // minimum distance from the window edge

function DeptPopup({ x, y, title, info, images }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(null)


  const rowRef = useRef(null)
  const [clipped, setClipped] = useState(false)

  const checkClipped = () => {
    const el = rowRef.current
    if (el) setClipped(el.scrollWidth > el.clientWidth + 1)
  }

  useLayoutEffect(checkClipped, [images])


  // runs after render but before paint, so the box never flashes in the wrong place
  useLayoutEffect(() => {
    const { width, height } = ref.current.getBoundingClientRect()
    const vw = document.documentElement.clientWidth
    const vh = document.documentElement.clientHeight

    // default: down and to the right of the cursor
    let left = x + GAP
    let top = y + GAP

    // flip to the left / above if it would run off the page
    if (left + width + MARGIN > vw) left = x - GAP - width
    if (top + height + MARGIN > vh) top = y - GAP - height

    // if it doesn't fit on either side, keep it on screen
    left = Math.max(MARGIN, left)
    top = Math.max(MARGIN, top)

    setPos({ left, top })
  }, [x, y])

  return createPortal(
    <div
      ref={ref}
      className={`dept-popup${pos ? ' is-placed' : ''}`}
      style={pos ?? undefined}
      role="tooltip"
    >
      <h3 className="dept-popup-title">{title}</h3>
      {images.length > 0 && (
        <div
          ref={rowRef}
          className={`dept-popup-images${clipped ? ' is-clipped' : ''}`}
        >
          {images.map((src) => (
            <img key={src} src={src} alt="" onLoad={checkClipped} className="dept-popup-image" />
          ))}
        </div>
      )}
      <p className="dept-popup-text">{info.text}</p>
      {info.cheese && <p className="">Varieties: {info.cheese}</p>}
    </div>,
    document.body
  )
}

export default DeptPopup