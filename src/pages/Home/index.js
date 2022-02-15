import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionHero from '../../components/SectionHero'
// import SectionAnnouncement from '../../components/SectionAnnouncement'
// import SectionJob from '../../components/SectionJob'

export default function Home() {

    return (
        <div>
            <Header />
            <SectionHero/>
            {/* <SectionAnnouncement />
            <SectionJob /> */}
            <Footer />
        </div>
    )

}