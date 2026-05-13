import { createFileRoute } from '@tanstack/react-router'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { LandingPageContent } from './index'

export const Route = createFileRoute('/proceso')({
  component: Proceso,
})

function Proceso() {
  useScrollToSection('proceso')

  return <LandingPageContent />
}
