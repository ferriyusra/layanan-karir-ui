import React from 'react';

import moment from 'moment'
import MdcMapMarkerRadius from '@meronex/icons/mdc/MdcMapMarkerRadius';
import { useRouteMatch } from 'react-router-dom';

import { getJobById } from '../../api/job';
import NumberFormat from 'react-number-format';

import FadeLoader from 'react-spinners/FadeLoader'
import { config } from '../../config';
import TiWorld from '@meronex/icons/ti/TiWorld';
import IosMan from '@meronex/icons/ios/IosMan';

import BiCheckCircle from '@meronex/icons/bi/BiCheckCircle';

export default function DetailJob(){


    let [job, setJob] = React.useState([]);
    let [error, setError] = React.useState('');
    let [status, setStatus] = React.useState('process');

    // get params
    let {params} = useRouteMatch();

    React.useEffect(() => {
        getJobById(params?.job_id)
            .then(({ data }) => {

                if (data?.error) {
                    setError(data.message || "Terjadi kesalahan yang tidak diketahui");
                }
                setJob(data)
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

   let job_skills = job.data.job_skills;
   let job_benefits = job.data.job_benefits;

   const listSkills = job_skills.map((skill) => <span className="badge rounded-pill bg-secondary h-75 mx-1">{skill.name}</span>)

   const listBenefits = job_benefits.map((benefit) =>  <span className="badge rounded-pill bg-success h-75 mx-1 my-1"><BiCheckCircle/> {benefit}</span>)
   

    return(

        <div className="job-post-company pt-120 pb-120">
            <section className="section-details-header mt-5"></section>
            <section className="section-details-content mb-5">
                <div className="container">
                <div className="row">
                    <div className="col p-0">
                            <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mx-3">
                                <li className="breadcrumb-item" aria-current="page" style={{color: '#304970'}}>
                                        Pekerjaan
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                        {job?.data.job_position}
                                </li>
                            </ol>
                            </nav>
                    </div>
                </div>
                </div>
            </section>
            <div className="container">
                <div className="row justify-content-between">
                <div className="col-xl-7 col-lg-8">
                    <div className="single-job-items mb-50">
                        <div className="job-items">
                            <div className="company-img company-img-details">
                                <img src={`${config.api_host}/upload/company_profile/${job?.data.company_name.company_image_url}`} alt="" style={{width: 55 + 'px'}}/>
                            </div>
                            <div className="job-tittle">
                                    <h4></h4>
                                <ul>
                                    <li>{job?.data.job_position}</li>
                                    <li><MdcMapMarkerRadius/>{job?.data.job_location}</li>
                                    <li><NumberFormat value={job?.data.job_salaries[0]} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /> - <NumberFormat value={job?.data.job_salaries[1]} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="job-post-details mt-5">
                        <div className="post-details1 mb-50">
                            <div className="small-section-tittle">
                                <h4>Deskripsi Pekerjaan</h4>
                            </div>
                            <p style={{textAlign: 'justify', textJustify: 'inter-word'}} dangerouslySetInnerHTML={{ __html: job?.data.job_description }} />
                        </div>
                        <div className="hr mt-3"></div>
                        <div className="post-details2 mx-2">
                            <div className="small-section-tittle">
                                <h4>Skill yang dibutuhkan</h4>
                                {listSkills}
                            </div>
                        </div>

                        <div className="hr mt-3"></div>
                        <div className="post-details2 mx-2">
                            <div className="small-section-tittle">
                                <h4>Tunjangan dan keuntungan</h4>
                                {listBenefits}
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className="col-xl-4 col-lg-4">
                    <div className="post-details3  mb-50">
                        <div className="small-section-tittle text-center">
                            <h4>Gambaran Singkat Lowongan Pekerjaan</h4>
                        </div>
                        <ul>
                            <li>Tanggal Dipublikasikan : <span>{moment(job?.data.createdAt).format('Do MMMM YYYY')}</span></li>
                            <li>Lokasi : <span>{job?.data.job_location}</span></li>
                            <li>Industri : <span>{job?.data.company_name.industry.name}</span></li>
                            <li>Tipe Pekerjaan : <span>{job?.data.type}</span></li>
                            <li>Bisa Remote : <span>{job?.data.is_remote ? "Bisa Remote" : "Tidak Bisa Remote"}</span></li>
                            <li>Pengalaman : <span>{job?.data.minYearsOfExperience} - {job?.data.maxYearsOfExperience} Tahun</span></li>
                        </ul>
                        <div className="header-2-1">
                            <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
                                <a className="btn d-inline-flex mb-md-0 btn-try text-white" href={job?.data.job_url} target="_blank">
                                    Lamar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

          

            </div>
            <div className="row">
                <div className="col-xl-7 col-lg-8">
                    <div className="post-details4 " style={{marginTop: 50 + 'px'}}>
                    <div className="hr"></div>

                        <div className="small-section-tittle">
                                <h4>Tentang Perusahaan</h4>
                        </div>
                            <span className="mt-2">{job?.data.company_name.company_name}</span>
                            <div className="company-img company-img-details">
                                    <img src={`${config.api_host}/upload/company_profile/${job?.data.company_name.company_image_url}`} alt="" className="img-thumbnail" style={{width: 120 + 'px'}} />
                            </div>
                            <span className="mt-2"><TiWorld/> Website : <a href={job?.data.company_name.website_url} target="_blank">{job?.data.company_name.website_url}
                                </a></span>
                            <span className="mt-2"><IosMan/> Ukuran Perusahaan : {job?.data.company_name.employeeMin} - {job?.data.company_name.employeeMax} karyawan</span>
                            <p style={{textAlign: 'justify', textJustify: 'inter-word'}} dangerouslySetInnerHTML={{ __html: job?.data.company_name.description }} className="mt-1" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )

}