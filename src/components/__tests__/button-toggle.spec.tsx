import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { ButtonToggle } from '../button-toggle'

describe('Button Toggle', () => {
  test('should toggle between ON and OFF when clicked', () => {
    render(<ButtonToggle />)

    const button = screen.getByRole('button')

    expect(button.textContent).toBe('OFF')

    fireEvent.click(button)

    expect(button.textContent).toBe('ON')

    fireEvent.click(button)
    expect(button.textContent).toBe('OFF')
  })
})
