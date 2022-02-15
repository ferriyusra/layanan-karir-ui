import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FaBars from '@meronex/icons/fa/FaBars';


export default function Navbar() {
    const [sideBar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sideBar);
    
    return (
        <section className="header-img" id="home">
        <header className="container header-nav-wrapper mb-4">
            <Link to="/">
                <img style={{marginRight: 0.75 + 'rem'}}
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header5/Header-5-9.png" alt="" />
            </Link>
            <nav className={`secondnav ${sideBar ? "active" : ""}`}>
                <Link to="/jobs">Lowongan Kerja</Link>
                <Link to="/companies">Perusahaan</Link>
                <Link to="/announcements">Pengumuman</Link>
                <Link to="/not_found">Tentang Layanan Karir</Link>
                <Link to="/not_found">Pengisian Kuisioner</Link>
            </nav>
            <FaBars className={`fa fa-bars secondnav-toggler ${sideBar ? "active" : ""}`} onClick={showSidebar} />
        </header>
    </section>
      
    )
}