import { createFileRoute } from '@tanstack/react-router'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { LandingPageContent } from './index'

export const Route = createFileRoute('/sobre-mi')({
  component: SobreMi,
})

function SobreMi() {
  useScrollToSection('sobre-mi')

  return <LandingPageContent />
}
