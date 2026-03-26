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
      <div style={{ marginBottom: 8, color: 'white', fontWeight: 600 }}>
        {t('footer.madeWith')}
      </div>
      <div style={{ marginBottom: 4 }}>
        <a href="https://www.visitluxembourg.com/" target="_blank" rel="noreferrer"
          style={{ color: 'var(--blue)', marginRight: 12 }}>Visit Luxembourg</a>
        <a href="https://luxembourg.public.lu/en.html" target="_blank" rel="noreferrer"
          style={{ color: 'var(--blue)', marginRight: 12 }}>Gouvernement.lu</a>
        <a href="https://statistiques.public.lu/en/statistique-publique/statec.html" target="_blank" rel="noreferrer"
          style={{ color: 'var(--blue)' }}>STATEC</a>
      </div>
      <div style={{ marginTop: 8 }}>{t('footer.disclaimer')}</div>
    </footer>
  )
}
