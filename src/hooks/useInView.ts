import { useEffect, useRef, useState } from "react"

/** Devuelve true cuando el elemento entra en pantalla (una sola vez). */
export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(() => typeof window !== "undefined" && !("IntersectionObserver" in window))

  useEffect(() => {
    const el = ref.current
    if (!el || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.15, ...options })
    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}
