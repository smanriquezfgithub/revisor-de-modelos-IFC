import { AppShell, Box, useMantineTheme, useMatches } from '@mantine/core'
import { ErrorBoundary, Footer } from '@components'
import { Outlet } from 'react-router-dom'
import logoFactorDigital from '../../assets/logo-factor-digital.png' // 👈 ruta relativa correcta

export const PageLayout = () => {
  const theme = useMantineTheme()
  const padding = useMatches({ base: 'lg', lg: 'xl' })

  return (
    <AppShell padding={padding} withBorder={false}>
      {/* Sin AppShell.Header: eliminamos la barra amarilla */}

      <AppShell.Main bg={theme.other.backgroundColor}>
        {/* Logo Factor Digital arriba a la izquierda */}
        <Box
          style={{
            position: 'fixed',
            top: 24,
            left: 32,
            zIndex: 10,
          }}
        >
          <img
            src={logoFactorDigital}
            alt="Factor Digital"
            style={{ height: 40 }}
          />
        </Box>

        {/* Contenido de cada página (IFC Validator + tarjeta, etc.) */}
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </AppShell.Main>

      <AppShell.Footer bg={theme.other.backgroundColor} px="md" pb="xs">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
