import { Link } from 'react-scroll'

export default function SectionHero() {
    return (
        <section className="h-100 w-100" style={{boxSizing: 'border-box', backgroundColor: '$fcfcff'}}>
     <div className="header-5-2 container-xxl mx-auto p-0 position-relative">
            <div className="position-relative mx-auto d-flex flex-lg-row flex-column hero">
                <div
                    className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center text-lg-left justify-content-center">
                    <p className="text-caption">Layanan Karir Kampus</p>
                    <h1 className="title-text-big">
                        Tempat untuk mencari informasi lowongan kerja<br className="d-md-inline d-none" />
                        untuk karir kamu!
                    </h1>
                    <div className="icon-list d-flex flex-wrap flex-sm-row flex-column">
                        <div className="icon-item justify-content-lg-start justify-content-sm-center justify-content-start d-flex">
                            <div className="h-100 d-flex align-items-start text-start">
                               
                                <div className="flex-grow-1" style={{ paddingLeft: 1 + 'rem' }}>
                                    <h2 className="icon-item-title">Karir Impian</h2>
                                    <p className="icon-item-caption">
                                        Temukan informasi tentang lowongan pekerjaan.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="icon-item justify-content-lg-start justify-content-sm-center justify-content-start d-flex">
                            <div className="h-100 d-flex align-items-start text-start">
                               
                                <div className="flex-grow-1" style={{ paddingLeft: 1 + 'rem' }}>
                                    <h2 className="icon-item-title">Informasi</h2>
                                    <p className="icon-item-caption">Temukan informasi seputar Layanan Karir.</p>
                                </div>
                            </div>
                        </div>
                        <div className="icon-item justify-content-lg-start justify-content-sm-center justify-content-start d-flex">
                            <div className="h-100 d-flex align-items-start text-start">
                               
                                <div className="flex-grow-1" style={{ paddingLeft: 1 + 'rem' }}>
                                    <h2 className="icon-item-title">Pengisian Kuisioner</h2>
                                    <p className="icon-item-caption">
                                        Lakukan pengisian kuisioner secara mudah.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-inline-block align-items-center mx-auto mx-lg-0 justify-content-center">
                        <Link component={Link} to="/jobs" spy={true} smooth={true} className="btn btn-main text-white d-inline-flex align-items-center mb-lg-0 mb-md-0">
                            <span className="me-1">Cari kerja</span>
                            <svg className="btn-fill-arrow" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.8651 12.56L14.8851 17.56C14.7251 17.72 14.5251 17.8 14.3251 17.8C14.1251 17.8 13.9251 17.72 13.7651 17.56C13.4451 17.24 13.4451 16.74 13.7651 16.42L17.3851 12.78H5.7051C5.2651 12.78 4.9051 12.42 4.9051 11.98C4.9051 11.54 5.2651 11.18 5.7051 11.18H17.3851L13.7651 7.54004C13.4451 7.22004 13.4451 6.72003 13.7651 6.40003C14.0851 6.08003 14.5851 6.08003 14.9051 6.40003L19.8851 11.4C20.1851 11.74 20.1851 12.26 19.8651 12.56Z"
                                    fill="white" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="right-column text-center d-flex justify-content-lg-end justify-content-center pe-0">
                    <img className="d-lg-block d-none" style={{ maxWidth: 100 + '%', height: 'auto' }}
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header5/Header-5-10.png"
                        alt="" />
                </div>
            </div>
        </div>
        </section>
   
    )

}