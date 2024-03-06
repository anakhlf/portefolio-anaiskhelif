import React from 'react'; 
import Image from '../../common/containers/Image'
import Menu from '../../common/containers/Menu'
import Footer from '../../common/containers/Footer'
import Presentation from '../../common/containers/Presentation'
import Gallery from '../../common/containers/Gallery';
import Skills from '../../common/containers/Skills';
import './style.css';

function Home() {

    return (
        <main id='main'>
            <Image />
            <Menu />
            <React.Suspense fallback={<div>Loading...</div>}>
                <Presentation />
                <Gallery />
                <Skills />
                <Footer />
            </React.Suspense>
        </main>
    )
}

export default Home;