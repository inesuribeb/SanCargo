import { useLanguage } from '../../contexts/LanguageContext';
import Heros from '../../components/Heros/Heros';
import './Sostenibilidad.css';

function Sostenibilidad() {
    const { t } = useLanguage();

    return (
        <div>
            <Heros
                titulo={t('mainTitleS')}
                subtitulo={t('subtitleS')}
                backgroundImage="/Images/Sostenibilidad/sostenibilidadMain.png"
            />
        </div>
    )
} 

export default Sostenibilidad;