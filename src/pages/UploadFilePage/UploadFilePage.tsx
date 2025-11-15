import { UploadCard } from '@components'
import { Stack, Title } from '@mantine/core'

export const UploadFilePage = () => {
  return (
    <Stack
      align="center"
      justify="center"
      h="90vh"
      gap="xl"
      style={{ textAlign: 'center' }}
    >
      {/* Título grande al centro, tipo “IFC Validator” */}
      <Title
        order={1}
        style={{
          fontSize: '4rem',
          fontWeight: 600,
          letterSpacing: '-0.03em',
        }}
      >
        IFC Validator
      </Title>

      {/* Tarjeta de carga */}
      <UploadCard />
    </Stack>
  )
}
