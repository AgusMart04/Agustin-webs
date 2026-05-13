import { createFileRoute } from '@tanstack/react-router'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { LandingPageContent } from './index'

export const Route = createFileRoute('/beneficios')({
  component: Beneficios,
})

function Beneficios() {
  useScrollToSection('beneficios')

  return <LandingPageContent />
}
