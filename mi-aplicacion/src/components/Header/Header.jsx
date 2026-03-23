import './Header.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

function Header() {
  const { t, getRoute, changeLanguage, language } = useLanguage();

  return (
    <header className="header">
      <div className="header__inner">

        <Link to={getRoute('home')} className="header__logo">
          <span className="header__logo-icon">⟨S⟩</span>
          <span className="header__logo-text">San Cargo</span>
        </Link>

        <nav className="header__nav">
          {/* <Link to={getRoute('home')} className="header__link">
            <span className="header__dot" />
            {t('home')}
          </Link> */}
          <Link to={getRoute('services')} className="header__link">
            <span className="header__dot" />
            {t('services')}
          </Link>
          <Link to={getRoute('sustainability')} className="header__link">
            <span className="header__dot" />
            {t('sustainability')}
          </Link>
          <Link to={getRoute('contact')} className="header__link">
            <span className="header__dot" />
            {t('contact')}
          </Link>
          <Link to={getRoute('work')} className="header__link header__link--cta">
            <span className="header__dot" />
            {t('work')}
          </Link>
        </nav>

        <div className="header__lang">
          {['es', 'en', 'de'].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`header__lang-btn ${language === lang ? 'header__lang-btn--active' : ''}`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
}

export default Header;