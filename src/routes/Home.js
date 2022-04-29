import React, {useRef}  from 'react'
import NavBar from '../components/NavBar'
import Slider from "../components/slider/Slider";
import About from "../components/About";
import Contact from "../components/Contact";
import MapLayer from "../components/MapLayer";
import Footer from "../components/Footer";

function Home() {
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <NavBar aboutRef={aboutRef} contactRef={contactRef} />
            <Slider/>
            <About ref={aboutRef} />
            <Contact ref={contactRef} />
            <MapLayer />
            <Footer />
        </>
    );
}

export default Home;
