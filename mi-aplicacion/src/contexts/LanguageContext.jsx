import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { homeTranslations } from './languageSections/HomeContent';
import { sostenibilityTranslations } from './languageSections/SostenibilityContent';
import { nosotrosTranslations } from './languageSections/NosotrosContent';

const translations = {
  es: {
    home: "Inicio",
    contact: "Contacto",
    services: "Servicios",
    sustainability: "Sostenibilidad",
    work: "Trabaja con nosotros",
    about: "Nosotros",
    ...homeTranslations.es,
    ...sostenibilityTranslations.es,
    ...nosotrosTranslations.es,
  },
  en: {
    home: "Home",
    contact: "Contact",
    services: "Services",
    sustainability: "Sustainability",
    work: "Work with us",
    about: "About us",
    ...homeTranslations.en,
    ...sostenibilityTranslations.en,
    ...nosotrosTranslations.en,

  },
  de: {
    home: "Startseite",
    contact: "Kontakt",
    services: "Dienstleistungen",
    sustainability: "Nachhaltigkeit",
    work: "Arbeite mit uns",
    about: "Über uns",
    ...homeTranslations.de,
    ...sostenibilityTranslations.de,
    ...nosotrosTranslations.de,
  },
};

const routes = {
  es: {
    home: "/",
    contact: "/contacto",
    services: "/servicios",
    sustainability: "/sostenibilidad",
    work: "/trabaja-con-nosotros",
    about: "/nosotros",
  },
  en: {
    home: "/en",
    contact: "/en/contact",
    services: "/en/services",
    sustainability: "/en/sustainability",
    work: "/en/work-with-us",
    about: "/en/about-us",
  },
  de: {
    home: "/de",
    contact: "/de/kontakt",
    services: "/de/dienstleistungen",
    sustainability: "/de/nachhaltigkeit",
    work: "/de/arbeite-mit-uns",
    about: "/de/ueber-uns",
  },
};

const routeMap = {
  // Español (base)
  "/":                      { es: "/",              en: "/en",              de: "/de" },
  "/contacto":              { es: "/contacto",      en: "/en/contact",      de: "/de/kontakt" },
  "/servicios":             { es: "/servicios",     en: "/en/services",     de: "/de/dienstleistungen" },
  "/sostenibilidad":        { es: "/sostenibilidad",en: "/en/sustainability",de: "/de/nachhaltigkeit" },
  "/trabaja-con-nosotros":  { es: "/trabaja-con-nosotros", en: "/en/work-with-us", de: "/de/arbeite-mit-uns" },
  "/nosotros":              { es: "/nosotros",      en: "/en/about-us",     de: "/de/ueber-uns" },


  // Inglés
  "/en":                    { es: "/",              en: "/en",              de: "/de" },
  "/en/contact":            { es: "/contacto",      en: "/en/contact",      de: "/de/kontakt" },
  "/en/services":           { es: "/servicios",     en: "/en/services",     de: "/de/dienstleistungen" },
  "/en/sustainability":     { es: "/sostenibilidad",en: "/en/sustainability",de: "/de/nachhaltigkeit" },
  "/en/work-with-us":       { es: "/trabaja-con-nosotros", en: "/en/work-with-us", de: "/de/arbeite-mit-uns" },
  "/en/about-us":           { es: "/nosotros",      en: "/en/about-us",     de: "/de/ueber-uns" },


  // Alemán
  "/de":                    { es: "/",              en: "/en",              de: "/de" },
  "/de/kontakt":            { es: "/contacto",      en: "/en/contact",      de: "/de/kontakt" },
  "/de/dienstleistungen":   { es: "/servicios",     en: "/en/services",     de: "/de/dienstleistungen" },
  "/de/nachhaltigkeit":     { es: "/sostenibilidad",en: "/en/sustainability",de: "/de/nachhaltigkeit" },
  "/de/arbeite-mit-uns":    { es: "/trabaja-con-nosotros", en: "/en/work-with-us", de: "/de/arbeite-mit-uns" },
  "/de/ueber-uns":          { es: "/nosotros",      en: "/en/about-us",      de: "/de/ueber-uns" },

};

const detectLanguageFromPath = (path) => {
  if (path.startsWith('/de')) return 'de';
  if (path.startsWith('/en')) return 'en';
  return 'es';
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [language, setLanguage] = useState(() =>
    detectLanguageFromPath(location.pathname)
  );

  const changeLanguage = (newLanguage) => {
    const currentPath = location.pathname;
    const newPath = routeMap[currentPath]?.[newLanguage] || routes[newLanguage].home;
    navigate(newPath);
    setLanguage(newLanguage);
  };

  const t = (key) => translations[language][key] || key;

  const getRoute = (routeName) => {
    const route = routes[language][routeName];
    if (!route) {
      console.warn(`No route '${routeName}' for language '${language}'`);
      return routes[language].home;
    }
    return route;
  };

  useEffect(() => {
    const detected = detectLanguageFromPath(location.pathname);
    if (detected !== language) setLanguage(detected);
  }, [location.pathname]);

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
      t,
      getRoute,
      routes,
      availableLanguages: ['es', 'en', 'de'],
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageContext;