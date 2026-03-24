import { useEffect } from 'react';
import { useHeader } from '../../contexts/HeaderContext';
import { useLanguage } from '../../contexts/LanguageContext';
import Hero from './components/Hero/Hero';
import Logos from './components/Logos/Logos';
import IntroUs from './components/IntroUs/IntroUs';
import ServiciosHome from './components/ServiciosHome/ServiciosHome';
import LogisticaSostenible from './components/LogicaSostenible/LogisticaSostenible';
import './Home.css';

function Home() {
    const { setDarkHeader } = useHeader();

    useEffect(() => {
        setDarkHeader(true);      
        return () => setDarkHeader(false);
    }, []);

    return (
        <div className='home-page'>
            {/* <h1>Home</h1> */}
            <Hero />
            <Logos />
            <IntroUs />
            <ServiciosHome />
            <LogisticaSostenible />
        </div>
    )
} 

export default Home;