import { useEffect, useRef } from 'react'

/**
 * Observes direct children of the returned ref and adds the
 * `reveal-visible` class once each one scrolls into view.
 * Mirrors the original vanilla-JS IntersectionObserver micro-interaction.
 */
export default function useScrollReveal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.querySelectorAll(':scope > .reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
          }
        })
      },
      { threshold: 0.1 },
    )

    items.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return containerRef
}
