import { createFileRoute } from '@tanstack/react-router'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { LandingPageContent } from './index'

export const Route = createFileRoute('/precios')({
  component: Precios,
})

function Precios() {
  useScrollToSection('precios')

  return <LandingPageContent />
}
