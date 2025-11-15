import { AppShell, Box, useMantineTheme, useMatches } from '@mantine/core'
import { ErrorBoundary, Footer } from '@components'
import { Outlet } from 'react-router-dom'
import logoFactorDigital from '@assets/logo-factor-digital.png' // <-- usa la misma ruta que en Header.tsx

export const PageLayout = () => {
  const theme = useMantineTheme()

  // Mantiene el padding responsivo que ya usabas
  const padding = useMatches({ base: 'lg', lg: 'xl' })

  return (
    <AppShell padding={padding} withBorder={false}>
      {/* Ya no usamos AppShell.Header, así desaparece la barra amarilla */}

      <AppShell.Main bg={theme.other.backgroundColor}>
        {/* Logo Factor Digital fijo arriba-izquierda */}
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

        {/* Contenido de la página (IFC Validator + tarjeta) */}
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

