import { useState } from 'react'

export function ButtonToggle() {
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setToggle((prevToggle) => !prevToggle)
  }

  return <button onClick={handleClick}>{toggle ? 'ON' : 'OFF'}</button>
}
