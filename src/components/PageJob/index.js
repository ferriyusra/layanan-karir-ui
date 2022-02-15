import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader'
import { config } from '../../config';
import { fetchJobs } from '../../features/Job/actions';
import NumberFormat from 'react-number-format';
import AiFillDollarCircle from '@meronex/icons/ai/AiFillDollarCircle';
import MdcMapMarkerRadius from '@meronex/icons/mdc/MdcMapMarkerRadius';

export default function SectionJob() {
    
    let dispatch = useDispatch();
    let jobs = useSelector(state => state.jobs);

    React.useEffect(() => {
      dispatch(fetchJobs())
    }, [dispatch]);

    console.log(jobs)

    return (
        <section className="find-job section" id="lowongan_kerja">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <header className="section-header" style={{marginTop: 85 + 'px'}}>
                            <h2>Lowongan Pekerjaan</h2>
                            <p>Lowongan Pekerjaan yang cocok untuk dirimu.</p>
                        </header>
                    </div>
                </div>
                <div className="job-listing-area pt-120 pb-120 mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4">
                                <div className="row">
                                    <div className="col-12">
                                            <div className="small-section-tittle2 mb-45">
                                            <h4>Filter Pekerjaan (Belum bisa digunakan)</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-category-listing mb-50">
                                    <div className="single-listing">
                                    <div className="small-section-tittle2">
                                            <h4>Kategori Pekerjaan</h4>
                                    </div>
                                        <div className="select-job-items2">
                                            <select name="select" className="form-select form-select-lg mb-3">
                                                <option value="">Category 1</option>
                                            </select>
                                        </div>
                                        <div className="select-Categories pt-80 pb-50">
                                            <div className="small-section-tittle2">
                                                <h4>Tipe Pekerjaan</h4>
                                            </div>
                                            <label className="container">Full Time
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">Part Time
                                                <input type="checkbox" checked="checked active" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">Remote
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">Freelance
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="single-listing">
                                    <div className="small-section-tittle2">
                                            <h4>Lokasi Pekerjaan</h4>
                                    </div>
                                        <div className="select-job-items2">
                                            <select name="select" className="form-select form-select-lg mb-3">
                                                <option value="">Jakarta, Indonesia</option>
                                            </select>
                                        </div>
                                        <div className="select-Categories pt-80 pb-50">
                                            <div className="small-section-tittle2">
                                                <h4>Pengalaman</h4>
                                            </div>
                                            <label className="container">1-2 Tahun
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="single-listing">
                                        <div className="select-Categories pb-50">
                                            <div className="small-section-tittle2">
                                                <h4>Terakhir Diperbarui</h4>
                                            </div>
                                            <label className="container">24 Jam terakhir
                                                <input type="checkbox" checked="checked active" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">Seminggu yang lalu
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">Satu Bulan terkahir
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-8">
                                <section className="featured-job-area">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="count-job mb-35">
                                                    <span>Total Lowongan Pekerjaan disini</span>
                                                    <div className="select-job-items">
                                                        <span>Filter Berdasarkan</span>
                                                        <select name="select" className="form-select form-select-lg mb-3">
                                                            <option value="">Belum dapat digunakan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {jobs.status === 'process' && !jobs.data.length ? 
                                        <div className="flex justify-center text-center mb-4">
                                            <FadeLoader
                                                color="#7b6eea"
                                                className="mb-4"
                                            />
                                        </div> : null}
                                        {jobs.data.map((job,index) => {
                                            return <div className="single-job-items mb-30">
                                            <div className="job-items">
                                                <div className="company-img">
                                                    <Link to={`/job/${job._id}`}><img src={`${config.api_host}/upload/company_profile/${job.company_name.company_image_url}`} alt={index} style={{width: 60 + 'px'}}  /></Link>
                                                </div>
                                                <div className="job-tittle job-tittle2">
                                                <Link to={`/job/${job._id}`}><h4>{job.job_position}</h4></Link>
                                                    <ul>
                                                    <li><AiFillDollarCircle/> <NumberFormat value={job.job_salaries[0]} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /> - <NumberFormat value={job.job_salaries[1]} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                                                    </li>
                                                    <li><MdcMapMarkerRadius/> {job.job_location}</li>
                                                        </ul>
                                                </div>
                                            </div>
                                            <div className="items-link items-link2 f-right">
                                                <Link to={`/jobs/${job._id}`}>{job.type}</Link>
                                                <span>{moment(job.createdAt).format('Do MMMM YYYY')}</span>
                                                
                                            </div>
                                        </div>
                                        })}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}