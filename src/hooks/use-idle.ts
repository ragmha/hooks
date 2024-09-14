import { useCallback, useEffect, useRef, useState } from 'react'

const DEFAULT_MS = 1000 * 60

export function useIdle(ms = DEFAULT_MS) {
  const [isIdle, setIsIdle] = useState(false)
  const timeoutRef = useRef<number>(0)

  const handleTimeout = useCallback(() => {
    setIsIdle(true)
  }, [])

  const handleEvent = useCallback(() => {
    setIsIdle(false)

    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(handleTimeout, ms)
  }, [ms, handleTimeout])

  const handleVisibilityChange = useCallback(() => {
    if (!document.hidden) {
      handleEvent()
    }
  }, [handleEvent])

  useEffect(() => {
    timeoutRef.current = window.setTimeout(handleTimeout, ms)

    window.addEventListener('mousemove', handleEvent)
    window.addEventListener('mousedown', handleEvent)
    window.addEventListener('resize', handleEvent)
    window.addEventListener('keydown', handleEvent)
    window.addEventListener('touchstart', handleEvent)
    window.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('wheel', handleEvent)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('mousemove', handleEvent)
      window.removeEventListener('mousedown', handleEvent)
      window.removeEventListener('resize', handleEvent)
      window.removeEventListener('keydown', handleEvent)
      window.removeEventListener('touchstart', handleEvent)
      window.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('wheel', handleEvent)
      document.removeEventListener('visibilitychange', handleVisibilityChange)

      window.clearTimeout(timeoutRef.current)
    }
  }, [handleEvent, handleTimeout, handleVisibilityChange, ms])

  return isIdle
}
