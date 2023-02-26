import { useState } from 'react'

export function Button ({ children, className, onClick }) {
  const [pressButton, setPressButton] = useState(false)

  const handleClick = (event) => {
    setPressButton(true)
    setTimeout(() => {
      setPressButton(false)
    }, 300)
    onClick(event)
  }

  const classBtn = className

  return (
    <button
      onClick={handleClick}
      className={(pressButton ? 'scale-95' : 'hover:scale-105') + ' btn ' + classBtn}
    >
      {children}
    </button>
  )
}
