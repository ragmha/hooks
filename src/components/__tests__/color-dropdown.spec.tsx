import { describe, expect, test } from 'vitest'
import { ColorDropDown } from '../color-dropdown'
import { fireEvent, render, screen } from '@testing-library/react'

describe('ColorDropdown', () => {
  test('should display the correct initial color', () => {
    render(<ColorDropDown />)

    const selectElement = screen.getByRole('combobox')
    const paragraphElement = screen.getByText(/You have selected: Red/i)

    expect(selectElement).toHaveValue('Red')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('should update the selected color when changed', () => {
    render(<ColorDropDown />)

    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: 'Green' } })

    const updatedParagraphElement = screen.getByText(
      /You have selected: Green/i
    )

    expect(selectElement).toHaveValue('Green')
    expect(updatedParagraphElement).toBeInTheDocument()
  })
})
