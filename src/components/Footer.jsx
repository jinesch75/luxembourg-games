import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="site-footer-inner">
          {/* Brand */}
          <div className="site-footer-brand">
            <img src="/bl-logo-1.png" alt="Beautiful Luxembourg logo" style={{ height: '28px', width: '28px', objectFit: 'contain' }} />
            <span translate="no">Beautiful Luxembourg</span>
          </div>
        </div>

        <div className="site-footer-divider" />

        <p className="site-footer-disclaimer">{t('footer.disclaimer')}</p>
      </div>
    </footer>
  )
}
