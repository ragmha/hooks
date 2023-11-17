import { useCallback, useState } from 'react'

export function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn(`Clipboard not supported`)
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (err) {
      console.error(`Failed to copy: ${err}`)
      setCopiedText(null)
      return false
    }
  }, [])

  return [copiedText, copy] as const
}
