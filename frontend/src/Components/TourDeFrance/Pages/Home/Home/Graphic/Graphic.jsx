import { useState, useEffect, useRef } from 'react'
import { departments, MAP_W, MAP_H } from './departments'
import { deptInfo, fallbackInfo } from './deptInfo'
import { getDeptImages } from './deptImages'
import DeptPopup from './DeptPopup'
import './Graphic.css'

const HOVER_DELAY = 500  // ms before the popup appears


function Graphic({ onSelect }) {
  const [selected, setSelected] = useState(null)
  const [popup, setPopup] = useState(null)   // { id, name, x, y } or null
  const timer = useRef(null)

  const clearTimer = () => {
    clearTimeout(timer.current)
    timer.current = null
  }

  const handleEnter = (e, id, name) => {
    if (e.pointerType === 'touch') return    // no hover on touch screens
    clearTimer()
    const { clientX: x, clientY: y } = e     // where the cursor entered
    timer.current = setTimeout(() => setPopup({ id, name, x, y }), HOVER_DELAY)
  }

  const handleLeave = () => {
    clearTimer()
    setPopup(null)
  }

  useEffect(() => clearTimer, [])            // clean up on unmount

  const handleClick = (id) => {
    setSelected((prev) => (prev === id ? null : id))
    onSelect?.(id)
  }

  return (
    <div className="map-container">
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="group" aria-label="Map of France">
        <defs>
          {departments.map(({ id, ds }) => (
            <g key={id} id={`shape-${id}`}>
              {ds.map((d, i) => <path key={i} d={d} />)}
            </g>
          ))}

          {departments.map(({ id }) => (
            <mask
              key={id}
              id={`cut-${id}`}
              maskUnits="userSpaceOnUse"
              x="0" y="0" width={MAP_W} height={MAP_H}
            >
              <use href={`#shape-${id}`} fill="white" />
              <use
                href={`#shape-${id}`}
                fill="none"
                stroke="black"
                strokeLinejoin="round"
                style={{ strokeWidth: 'calc(var(--dept-gap) * 2)' }}
              />
            </mask>
          ))}
        </defs>

        {departments.map(({ id, name }) => (
          <g
            key={id}
            className={`dept${selected === id ? ' is-selected' : ''}`}
            mask={`url(#cut-${id})`}
            onClick={() => handleClick(id)}
            onPointerEnter={(e) => handleEnter(e, id, name)}
            onPointerLeave={handleLeave}
          >
            <use href={`#shape-${id}`} className="dept-fill" />
          </g>
        ))}
      </svg>

      {popup && (
        <DeptPopup
          key={popup.id}
          x={popup.x}
          y={popup.y}
          title={deptInfo[popup.id]?.title ?? popup.name}
          info={deptInfo[popup.id] ?? fallbackInfo}
          images={getDeptImages(popup.id)}
        />
      )}
    </div>
  )
}

export default Graphic