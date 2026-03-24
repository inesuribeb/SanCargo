import { useLanguage } from '../../contexts/LanguageContext';
import Heros from '../../components/Heros/Heros';
import './Nosotros.css';

function Nosotros() {
    const { t } = useLanguage();

    return (
        <div>
            <Heros
                titulo={t('mainTitleN')}
                subtitulo={t('subtitleN')}
                backgroundImage="/Images/Nosotros/nosotrosMain.png"
            />
        </div>
    )
}

export default Nosotros;