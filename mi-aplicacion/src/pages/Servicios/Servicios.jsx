import { useEffect } from 'react';
import { useHeader } from '../../contexts/HeaderContext';
import { useParams } from 'react-router-dom';
import { SCservices } from "../../utils/ServicesData";
import { useLanguage } from '../../contexts/LanguageContext';
import Heros from '../../components/Heros/Heros';
import './Servicios.css';

function Servicios() {
    const { slug } = useParams();
    const { language } = useLanguage();
    const service = SCservices.find(s => s.slug[language] === slug);
    const { setDarkHeader } = useHeader();

    useEffect(() => {
        setDarkHeader(true);      
        return () => setDarkHeader(false);
    }, []);

    if (!service) return <div>Servicio no encontrado</div>;

    return (
        <div>
            <Heros
                titulo={service.pageTitle[language]}
                subtitulo={service.introSubtitle[language]}
                backgroundImage={service.heroImg}
            />
        </div>
    )
} 

export default Servicios;