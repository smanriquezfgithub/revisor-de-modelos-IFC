import oscLogo from 'assets/logo-factor-digital.png'
import { Group, Title, UnstyledButton, useMatches } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const imageHeight = useMatches({
    base: '24px',
    lg: '36px',
  })

  return (
    <Group justify='space-between'>
      <UnstyledButton onClick={() => navigate('/')}>
        <Group pt={8}>
          <img src={oscLogo} alt={'opensource.construction'} style={{ maxHeight: imageHeight }} />
          <Title order={4}>IFC Validator</Title>
        </Group>
      </UnstyledButton>
      <UnstyledButton onClick={() => i18n.changeLanguage(i18n.resolvedLanguage === 'es' ? 'es' : 'es')} mr='md'>
        {i18n.resolvedLanguage === 'es' ? 'ES' : 'ES'}
      </UnstyledButton>
    </Group>
  )
}
