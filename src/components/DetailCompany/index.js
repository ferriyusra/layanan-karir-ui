import React from 'react'
import { Link } from 'react-router-dom'
import TiWorld from '@meronex/icons/ti/TiWorld';
import { useRouteMatch } from 'react-router-dom';

import MdcMapMarkerRadius from '@meronex/icons/mdc/MdcMapMarkerRadius';
import BisBuildings from '@meronex/icons/bi/BisBuildings';

import { getCompanyById } from '../../api/company';
import IosMan from '@meronex/icons/ios/IosMan';

import FadeLoader from 'react-spinners/FadeLoader'
import { config } from '../../config';


export default function DetailCompany(){

    let [company, setCompany] = React.useState([]);
    let [error, setError] = React.useState('');
    let [status, setStatus] = React.useState('process');

    // get params
    let {params} = useRouteMatch();

    React.useEffect(() => {
        getCompanyById(params?.company_id)
            .then(({ data }) => {

                if (data?.error) {
                    setError(data.message || "Terjadi kesalahan yang tidak diketahui");
                }
                setCompany(data)
            })
            .finally(() => setStatus('idle'))

    }, [params]);

    if(error.length){
        return(
            <h1>Terjadi kesalahan yang saya aja gatau salahnya apa</h1>
        )
    }

    if(status === 'process') {
        return <div className="text-center py-10">
            <div className="inline-block">
              <FadeLoader color="#7b6eea"/>
            </div>
          </div>
   }



    return (

        <div className="job-post-company pt-120 pb-120">
        <section className="section-details-header mt-5"></section>
        <section className="section-details-content mb-5">
            <div className="container">
            <div className="row">
                <div className="col p-0">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mx-3">
                            <li className="breadcrumb-item" aria-current="page" style={{color: '#304970'}}>
                                    Perusahaan
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                    {company?.data.company_name}
                            </li>
                        </ol>
                        </nav>
                </div>
            </div>
            </div>
        </section>
        <div className="container">
            <div className="row justify-content-between">
            <div className="col-xl-8 col-lg-8">
                <div className="single-job-items mb-50">
                    <div className="job-items">
                        <div className="company-img company-img-details">
                            <img src={`${config.api_host}/upload/company_profile/${company?.data.company_image_url}`} alt="" style={{width:130 + 'px'}}/>
                        </div>
                        <div className="job-tittle">
                                <h4></h4>
                          <div className="row mr-1">
                            <div className="col-lg-4">
                                <ul>
                                    <li><BisBuildings/> Industri : {company?.data.industry.name}</li>
                                    <li><MdcMapMarkerRadius/> Lokasi : {company?.data.location}</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><TiWorld/> Website : <a href={company?.data.website_url} target="_blank">{company?.data.website_url}</a></li>
                                    <li><IosMan/> Ukuran Perusahaan : {company?.data.employeeMin} - {company?.data.employeeMax} karyawan</li>
                                </ul>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="job-post-details mt-5">
                    <div className="post-details1 mb-50">
                        <div className="small-section-tittle">
                            <h4>Deskripsi Perusahan</h4>
                        </div>
                        <p style={{textAlign: 'justify', textJustify: 'inter-word'}} dangerouslySetInnerHTML={{ __html: company?.data.description }} />
                    </div>
                    
                </div>

            </div>


        </div>
       
    </div>
    </div>

    )

}