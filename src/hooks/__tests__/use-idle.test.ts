import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { fireEvent, renderHook } from '@testing-library/react'

import { useIdle } from '../use-idle'

describe('useIdle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('return false on initial render', () => {
    const { result } = renderHook(() => useIdle())
    expect(result.current).toBe(false)
  })

  test('returns false after activity', () => {
    const { result } = renderHook(() => useIdle())

    vi.advanceTimersByTime(1000)

    expect(result.current).toBe(false)

    fireEvent.mouseMove(window)

    expect(result.current).toBe(false)
  })
})
