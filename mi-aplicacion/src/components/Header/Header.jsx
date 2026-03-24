import { useState } from 'react';
import './Header.css';
import { useHeader } from '../../contexts/HeaderContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { NavLink } from 'react-router-dom';
import { SCservices } from '../../utils/ServicesData';

function Header() {
  const { darkHeader } = useHeader();
  const { t, getRoute, changeLanguage, language } = useLanguage();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    // <header className="header">
    <header className={`header ${darkHeader ? 'header--dark' : ''}`}>
      <div className="header__inner">

        <NavLink to={getRoute('home')} className="header__logo">
          <img src="/Images/logoSC_trans.png" alt="SanCargo" className="header__logo-img" />
          <span className="header__logo-text">SanCargo</span>
        </NavLink>

        <nav className="header__nav">
          <NavLink to={getRoute('about')} className={({ isActive }) => `header__link ${isActive ? 'active' : ''}`}>
            <span className="header__dot" />
            {t('about')}
          </NavLink>

          <div
            className="header__dropdown"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <span className="header__link">
              <span className="header__dot" />
              {t('services')}
            </span>
          </div>

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

      {/* Submenu fuera del dropdown, hijo directo del header */}
      <div
        className={`header__submenu ${submenuOpen ? 'header__submenu--open' : ''}`}
        onMouseEnter={() => setSubmenuOpen(true)}
        onMouseLeave={() => setSubmenuOpen(false)}
      >
        {SCservices.map((service) => (
          <NavLink
            key={service.id}
            to={`${getRoute('services')}/${service.slug[language]}`}
            className="header__submenu-item"
            style={{ '--hover-img': `url(${service.headerImg})` }}
            onClick={() => setSubmenuOpen(false)}
          >
            <span className="header__submenu-title">{service.cardTitle[language]}</span>
            <span className="header__submenu-arrow">→</span>
          </NavLink>
        ))}
      </div>

    </header>
  );
}

export default Header;