import './TitleSubtitle.css';

function TitleSubtitle({ titulo, subtitulo, className = '' }) {
    return (
        <div className={`title-subtitle ${className}`}>
            <h2 className="title-subtitle__title">{titulo}</h2>
            <p className="title-subtitle__subtitle">{subtitulo}</p>
        </div>
    )
}

export default TitleSubtitle;