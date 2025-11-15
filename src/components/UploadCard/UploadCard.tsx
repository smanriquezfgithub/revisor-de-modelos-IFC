import { Button, Group, rem, Stack, Text } from '@mantine/core'
import { Paper } from '@components'
import { Dropzone, FileRejection } from '@mantine/dropzone'
import { IconFile3d, IconUpload, IconX } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useValidationContext } from '@context'
import { processFile } from './processFile.ts'
import { useTranslation } from 'react-i18next'
import { UploadCardTitle } from './UploadCardTitle.tsx'

interface FileError {
  code: string
  message: string
  file: string
}

export const UploadCard = () => {
  const navigate = useNavigate()
  const { dispatch } = useValidationContext()
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<FileError[] | null>(null)
  const { t } = useTranslation()

  const handleClick = () => {
    if (!files.length) return
    files.forEach((file) => {
      processFile({ file: file as File, dispatch, fileId: file.name })
    })
    setFiles([])
    navigate('/results')
  }

  const handleDrop = (acceptedFiles: File[]) => {
    setErrors([])
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles])
  }

  const handleReject = (fileRejections: FileRejection[]) => {
    setErrors(
      fileRejections.map((rejection) => ({
        ...rejection.errors[0],
        file: rejection.file.name,
      })),
    )
  }

  const fileValidator = (file: File) => {
    const validExtension = file.name.endsWith('.ifc')
    if (!validExtension) {
      return {
        code: 'file-invalid-type',
        message: t('dropzone.error'),
      }
    }
    return null
  }

  return (
    <Stack align="center" gap="lg">

      {/* Tarjeta estilo mock IFC Validator */}
      <Stack style={{ width: 340 }}>
        <Paper hide={false}>
          <Stack gap="md">

            {/* Título con (i) */}
            <UploadCardTitle />

            {/* Dropzone sin borde, sin fondo */}
            <Dropzone
              onDrop={handleDrop}
              onReject={handleReject}
              maxSize={500 * 1024 ** 2}
              multiple={true}
              validator={fileValidator}
              styles={{
                root: {
                  border: 'none',
                  backgroundColor: 'transparent',
                  padding: '24px 0',
                  boxShadow: 'none',
                },
              }}
            >
              <Group
                justify="center"
                gap="xl"
                mih={180}
                style={{ pointerEvents: 'none' }}
              >
                <Dropzone.Accept>
                  <IconUpload
                    style={{
                      width: rem(64),
                      height: rem(64),
                      color: 'var(--mantine-color-blue-6)',
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Accept>

                <Dropzone.Reject>
                  <IconX
                    style={{
                      width: rem(64),
                      height: rem(64),
                      color: 'var(--mantine-color-red-6)',
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Reject>

                <Dropzone.Idle>
                  <IconFile3d
                    style={{
                      width: rem(72),
                      height: rem(72),
                      color: 'var(--mantine-color-dark-9)',
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Idle>

                <Stack maw={260} gap="xs">
                  <Text
                    size="sm"
                    style={{ fontWeight: 600, textTransform: 'uppercase' }}
                  >
                    {t('dropzone.drag')}
                  </Text>
                  <Text size="sm" c="dimmed" mt={2}>
                    {t('dropzone.attach')}
                  </Text>
                </Stack>
              </Group>

              {/* Lista de archivos seleccionados */}
              {files?.length ? (
                <div style={{ marginTop: 8 }}>
                  {files.map((file, index) => (
                    <Group key={index} gap={6}>
                      <IconFile3d stroke={0.7} />
                      <Text size="sm">{file.name}</Text>
                    </Group>
                  ))}
                </div>
              ) : null}

              {/* Errores */}
              {errors && errors.length > 0 ? (
                <div style={{ marginTop: 4 }}>
                  {errors.map((error, idx) => (
                    <Text key={idx} size="sm" c="red">
                      {t('dropzone.error-message')}: {error.file} - {error.message}
                    </Text>
                  ))}
                </div>
              ) : null}
            </Dropzone>

            {/* Botón Validar */}
            <Button mt="xs" onClick={handleClick} disabled={!files.length} fullWidth>
              {t('validate')}
            </Button>

          </Stack>
        </Paper>
      </Stack>

      {/* Párrafos informativos */}
      <Stack maw={900} gap="xs" align="center" px="md">
        <Text size="sm" ta="center">{t('upload-description.0')}</Text>
        <Text size="sm" ta="center">{t('upload-description.1')}</Text>
        <Text size="sm" ta="center">{t('upload-description.2')}</Text>
        <Text size="sm" fw={700} ta="center">{t('upload-description.3')}</Text>
        <Text size="sm" ta="center">{t('upload-description.4')}</Text>
      </Stack>

    </Stack>
  )
}

