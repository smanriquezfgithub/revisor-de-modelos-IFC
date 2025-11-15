import { AppShell, rem, useMantineTheme, useMatches } from '@mantine/core'
import { ErrorBoundary, Footer, Header } from '@components'
import { Outlet } from 'react-router-dom'

export const PageLayout = () => {
  const theme = useMantineTheme()
  const headerHeight = useMatches({
    base: 40,
    lg: 60,
  })
  const padding = useMatches({ base: 'lg', lg: 'xl' })

  return (
   
  )
}
