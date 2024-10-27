import { ChangeEvent, useState } from 'react'

const colors = {
  red: 'Red',
  green: 'Green',
  blue: 'Blue',
} as const

export function ColorDropDown() {
  const [color, setColor] = useState<string>(colors.red)

  function handleChange(e: ChangeEvent<HTMLSelectElement>): void {
    setColor(e.target.value)
  }

  return (
    <>
      <select onChange={handleChange} value={color}>
        {Object.values(colors).map((colorOption) => (
          <option key={colorOption} value={colorOption}>
            {colorOption}
          </option>
        ))}
      </select>
      {color && <p>{`You have selected: ${color}`}</p>}
    </>
  )
}
