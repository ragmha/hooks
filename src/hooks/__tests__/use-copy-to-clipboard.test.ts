import { describe, expect, test } from 'vitest'
import { useCopyToClipboard } from '../use-copy-to-clipboard'
import { renderHook } from '@testing-library/react'

describe('useCopyToClipboard', () => {
  test('copies text to clipboard', async () => {
    const { result } = renderHook(() => useCopyToClipboard())
    const [, copy] = result.current

    const textCopy = 'Hello!!'
    const copySuccess = await copy(textCopy)

    expect(copySuccess).toBe(true)
  })

  test('returns false if clipboard is not supported', async () => {
    const { result } = renderHook(() => useCopyToClipboard())
    const [, copy] = result.current

    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      writable: true,
    })

    const textCopy = 'Hello !'
    const copySuccess = await copy(textCopy)

    expect(copySuccess).toBe(false)
  })
})
