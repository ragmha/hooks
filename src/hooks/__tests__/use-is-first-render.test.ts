import { test, expect, describe } from 'vitest'

import { useIsFirstRender } from '../use-is-first-render'
import { renderHook } from '@testing-library/react'

describe('useIsFirstRender', () => {
  test('returns true on first render', () => {
    const { result } = renderHook(() => useIsFirstRender())
    expect(result.current).toBe(true)
  })

  test('returns false on second render', () => {
    const { result, rerender } = renderHook(() => useIsFirstRender())
    rerender()
    expect(result.current).toBe(false)
  })
})
