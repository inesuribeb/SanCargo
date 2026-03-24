import './TitleSubtitle.css';

function TitleSubtitle({ titulo, subtitulo, className = '' }) {
    return (
        <div className={`title-subtitle ${className}`}>
            <h2 
                className="title-subtitle__title"
                dangerouslySetInnerHTML={{ __html: titulo }}
            />
            <p 
                className="title-subtitle__subtitle"
                dangerouslySetInnerHTML={{ __html: subtitulo }}
            />
        </div>
    )
}

export default TitleSubtitle;