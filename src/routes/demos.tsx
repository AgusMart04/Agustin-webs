import { createFileRoute } from '@tanstack/react-router'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { LandingPageContent } from './index'

export const Route = createFileRoute('/demos')({
  component: Demos,
})

function Demos() {
  useScrollToSection('demos')

  return <LandingPageContent />
}
