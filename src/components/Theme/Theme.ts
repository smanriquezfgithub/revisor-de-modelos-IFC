import { Button, Text, createTheme, rem } from '@mantine/core'

export const theme = createTheme({
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',

  headings: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: 600,
    color: '#111827', // ← títulos también con gris-900
  },

  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },

  // Puedes agregar esta paleta pero no es obligatorio
  colors: {
    gray900: [
      '#f3f4f6',
      '#e5e7eb',
      '#d1d5db',
      '#9ca3af',
      '#6b7280',
      '#4b5563',
      '#374151',
      '#1f2937',
      '#111827', // ← este es rgb(17, 24, 39)
      '#0f172a',
    ],
  },

  other: {
    backgroundColor: '#fafbff',
  },

  components: {
    Text: Text.extend({
      defaultProps: {
        c: '#111827', // ← COLOR GLOBAL DEL TEXTO
      },
    }),

    Button: Button.extend({
      defaultProps: {
        variant: 'filled',
        autoContrast: true,
      },
    }),
  },
})

