import { useEffect } from 'react'

export function useScrollToSection(sectionId: string) {
  useEffect(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [sectionId])
}
