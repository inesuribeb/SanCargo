import './Header.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // 👈 cambia Link por NavLink

function Header() {
  const { t, getRoute, changeLanguage, language } = useLanguage();

  return (
    <header className="header">
      <div className="header__inner">

        {/* <NavLink to={getRoute('home')} className="header__logo">
          <span className="header__logo-icon">⟨S⟩</span>
          <span className="header__logo-text">SanCargo</span>
        </NavLink> */}
        <NavLink to={getRoute('home')} className="header__logo">
          <img src="/Images/logoSC_trans.png" alt="SanCargo" className="header__logo-img" />
          <span className="header__logo-text">SanCargo</span>
        </NavLink>

        <nav className="header__nav">
          <NavLink to={getRoute('services')} className={({ isActive }) => `header__link ${isActive ? 'active' : ''}`}>
            <span className="header__dot" />
            {t('services')}
          </NavLink>

          <NavLink to={getRoute('sustainability')} className={({ isActive }) => `header__link ${isActive ? 'active' : ''}`}>
            <span className="header__dot" />
            {t('sustainability')}
          </NavLink>

          <NavLink to={getRoute('contact')} className={({ isActive }) => `header__link ${isActive ? 'active' : ''}`}>
            <span className="header__dot" />
            {t('contact')}
          </NavLink>

          <NavLink to={getRoute('work')} className={({ isActive }) => `header__link header__link--cta ${isActive ? 'active' : ''}`}>
            <span className="header__dot" />
            {t('work')}
          </NavLink>
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