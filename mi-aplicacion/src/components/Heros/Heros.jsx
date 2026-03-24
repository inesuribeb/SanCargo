import TitleSubtitle from '../Texts/TitleSubtitle';
import './Heros.css';

function Heros({ titulo, subtitulo, className = '', backgroundImage }) {
    return (
        <section 
            className={`heros-section ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="heros-overlay" />
            <TitleSubtitle 
                titulo={titulo}
                subtitulo={subtitulo}
                className="heros__title"
            />
        </section>
    )
}

export default Heros;