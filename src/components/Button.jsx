import { useState } from 'react'

export function Button ({ children, className, title, onClick = null }) {
  const [pressButton, setPressButton] = useState(false)

  const handleClick = (event) => {
    setPressButton(true)
    setTimeout(() => {
      setPressButton(false)
    }, 300)
    if (onClick !== null) {
      onClick(event)
    }
  }

  const classBtn = className

  return (
    <button
      title={title}
      onClick={handleClick}
      className={(pressButton ? 'scale-95' : 'hover:scale-105') + ' btn ' + classBtn}
    >
      {children}
    </button>
  )
}
