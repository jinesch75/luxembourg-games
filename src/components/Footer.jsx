import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer style={{
      background: 'var(--gray-800)',
      color: 'var(--gray-400)',
      textAlign: 'center',
      padding: '20px 16px 84px',
      fontSize: '0.8rem',
      lineHeight: 1.7
    }}>
      <div>{t('footer.disclaimer')}</div>
    </footer>
  )
}
