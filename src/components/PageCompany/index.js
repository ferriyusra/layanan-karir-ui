import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader'
import { config } from '../../config';
import { fetchCompanies } from '../../features/Company/actions';
import MdcMapMarkerRadius from '@meronex/icons/mdc/MdcMapMarkerRadius';
import BisBuildings from '@meronex/icons/bi/BisBuildings';

export default function SectionCompany() {
    
    let dispatch = useDispatch();
    let companies = useSelector(state => state.companies);

    React.useEffect(() => {
      dispatch(fetchCompanies())
    }, [dispatch]);

   
    return (
        <section className="find-job section" id="lowongan_kerja">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <header className="section-header" style={{marginTop: 85 + 'px'}}>
                            <h2>Perusahaan</h2>
                            <p>Cari daftar perusahaan</p>
                        </header>
                    </div>
                    <div className="row justify-content-center">
                        
                        <div className="col-lg-12">
                        {companies.status === 'process' && !companies.data.length ? 
                                        <div className="flex justify-center text-center mb-4">
                                            <FadeLoader
                                                color="#7b6eea"
                                                className="mb-4"
                                            />
                                        </div> : null}
                        </div>
                   
                    </div>
                    {companies.data.map((company,index) => {
                            return <div className="col-lg-4">
                                <div className="card mt-5 mb-3 p-4">
                                <div className="d-flex flex-row justify-content-between align-items-center"> <img src={`${config.api_host}/upload/company_profile/${company.company_image_url}`} alt={index}
                                                style={{width: 60 + 'px', height: 60 + 'px'}} /></div>
                                <h5 className="mt-3"><Link to={`/company/${company._id}`}>{company.company_name}</Link></h5>
                                <p className="text-muted"><MdcMapMarkerRadius/> {company.location}</p>
                                <p className="text-muted"><BisBuildings/> {company.industry.name}</p>
                                </div>
                                </div>

                    })}
                </div>
            </div>
        </section>
    )
}

{/* <div className="col-lg-4">
<div className="container d-flex justify-content-center">
<div className="card mt-5 mb-3 p-4">
<div className="d-flex flex-row justify-content-between align-items-center"> <img src={`${config.api_host}/upload/company_profile/${job.company_name.company_image_url}`} alt={index}
                  style={{width: 60 + 'px', height: 60 + 'px'}} /></div>
<h5 className="mt-3"><Link to={`/jobs/${job._id}`}>{job.company_name}</Link></h5>
<p className="text-muted"><MdcMapMarkerRadius/> {job.company_name.location}</p>
<p className="text-muted"><BisBuildings/> {job.company_name.industry.name}</p>
</div>
</div>
</div> */}