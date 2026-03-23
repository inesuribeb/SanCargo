import { useLanguage } from '../../../../contexts/LanguageContext';
import TitleSubtitle from '../../../../components/Texts/TitleSubtitle';
import './Hero.css';

function Hero() {
    const { t } = useLanguage();

    return (
        <section className='hero-section'>
            <TitleSubtitle
                titulo={t('mainTitle')}
                subtitulo={t('subtitle')}
                className="hero__title"
            />
        </section>
    )
}

export default Hero;