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


    return (
        <section className="find-job section" id="lowongan_kerja">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <header className="section-header" style={{marginTop: 85 + 'px'}}>
                            <h2>Lowongan Pekerjaan</h2>
                            <p>Lowongan Pekerjaan yang cocok untuk dirimu.</p>
                        </header>
                        <div className="header-2-1">
                            <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
                                <Link className="btn d-inline-flex mb-md-0 btn-try text-white" to="/lowongan_kerja">
                                    Lihat semua
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="featured-job-area feature-padding">
                    <div class="container">
                        <div class="row justify-content-center">
                        {jobs.status === 'process' && !jobs.data.length ? 
                                        <div className="flex justify-center text-center mb-4 mt-5">
                                            <FadeLoader
                                                color="#7b6eea"
                                                className="mb-4"
                                            />
                                        </div> : null}
                            <div class="col-xl-10">
                            {jobs.data.map((job,index) => {
                                    return <div className="single-job-items mb-30 mt-5">
                                    <div className="job-items">
                                        <div className="company-img">
                                            <Link to={`/jobs/${job._id}`}><img  src={`${config.api_host}/upload/company_profile/${job.company_name.company_image_url}`} alt={index} /></Link>
                                        </div>
                                        <div className="job-tittle job-tittle2">
                                        <Link to={`/jobs/${job._id}`}><h4>{job.job_position}</h4></Link>
                                            <ul>
                                            <li><AiFillDollarCircle/>
                                            <NumberFormat value={job.job_salaries[0]} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /> - <NumberFormat value={job.job_salaries[1]} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                                            </li>
                                            <li><MdcMapMarkerRadius/>{job.job_location}</li>
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
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

{/* <section class="find-job section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title">
                    <span class="wow fadeInDown">Hot Jobs</span>
                    <h2 class="wow fadeInUp">Browse Recent Jobs</h2>
                    <p class="wow fadeInUp">There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
            </div>
        </div>
        <div class="single-head">
            <div class="row">
                <div class="col-lg-6 col-12">

                    <div class="single-job wow fadeInUp" >
                        <div class="job-image">
                            <img src="assets/images/jobs/img1.png" alt="#">
                        </div>
                        <div class="job-content">
                            <h4><a href="job-details.html">Software Engineer</a></h4>
                            <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                week. All leads are pre-scheduled. </p>
                            <ul>
                                <li><i class="lni lni-website"></i><a href="#"> winbrans.com</a></li>
                                <li><i class="lni lni-dollar"></i> $20k - $25k</li>
                                <li><i class="lni lni-map-marker"></i> New York</li>
                            </ul>
                        </div>
                        <div class="job-button">
                            <ul>
                                <li><a href="job-details.html">Apply</a></li>
                                <li><span>full time</span></li>
                            </ul>
                        </div>
                    </div>


                    <div class="single-job wow fadeInUp" >
                        <div class="job-image">
                            <img src="assets/images/jobs/img2.png" alt="#">
                        </div>
                        <div class="job-content">
                            <h4><a href="job-details.html">Graphics Design</a></h4>
                            <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                week. All leads are pre-scheduled. </p>
                            <ul>
                                <li><i class="lni lni-website"></i><a href="#"> designhub.com</a></li>
                                <li><i class="lni lni-dollar"></i> $20k - $25k</li>
                                <li><i class="lni lni-map-marker"></i> Washington, USA</li>
                            </ul>
                        </div>
                        <div class="job-button">
                            <ul>
                                <li><a href="job-details.html">Apply</a></li>
                                <li><span>Intern</span></li>
                            </ul>
                        </div>
                    </div>


                    <div class="single-job wow fadeInUp" >
                        <div class="job-image">
                            <img src="assets/images/jobs/img3.png" alt="#">
                        </div>
                        <div class="job-content">
                            <h4><a href="job-details.html">Ui/Ux Design</a></h4>
                            <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                week. All leads are pre-scheduled. </p>
                            <ul>
                                <li><i class="lni lni-website"></i><a href="#"> uddesign.com</a></li>
                                <li><i class="lni lni-dollar"></i> $20k - $25k</li>
                                <li><i class="lni lni-map-marker"></i> Cupertino, USA</li>
                            </ul>
                        </div>
                        <div class="job-button">
                            <ul>
                                <li><a href="job-details.html">Apply</a></li>
                                <li><span>Part Time</span></li>
                            </ul>
                        </div>
                    </div>


                    <div class="single-job wow fadeInUp" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                        <div class="job-image">
                            <img src="assets/images/jobs/img4.png" alt="#">
                        </div>
                        <div class="job-content">
                            <h4><a href="job-details.html">Web Developer</a></h4>
                            <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                week. All leads are pre-scheduled. </p>
                            <ul>
                                <li><i class="lni lni-website"></i><a href="#"> webinner.com</a></li>
                                <li><i class="lni lni-dollar"></i> $20k - $25k</li>
                                <li><i class="lni lni-map-marker"></i> Delaware, USA</li>
                            </ul>
                        </div>
                        <div class="job-button">
                            <ul>
                                <li><a href="job-details.html">Apply</a></li>
                                <li><span>Intern</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 col-12">

                    <div class="single-job wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                        <div class="job-image">
                            <img src="assets/images/jobs/img7.png" alt="#">
                        </div>
                        <div class="job-content">
                            <h4><a href="job-details.html">Digital Marketer</a></h4>
                            <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                week. All leads are pre-scheduled. </p>
                            <ul>
                                <li><i class="lni lni-website"></i><a href="#"> marketers.com</a></li>
                                <li><i class="lni lni-dollar"></i> $20k - $25k</li>
                                <li><i class="lni lni-map-marker"></i> New York, USA</li>
                            </ul>
                        </div>
                        <div class="job-button">
                            <ul>
                                <li><a href="job-details.html">Apply</a></li>
                                <li><span>Part Time</span></li>
                            </ul>
                        </div>
                    </div>


                    <div class="single-job wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                        <div class="job-image">
                            <img src="assets/images/jobs/img5.png" alt="#">
                        </div>
                        <div class="job-content">
                            <h4><a href="job-details.html">Sales Manager</a></h4>
                            <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                week. All leads are pre-scheduled. </p>
                            <ul>
                                <li><i class="lni lni-website"></i><a href="#"> winbrans.com</a></li>
                                <li><i class="lni lni-dollar"></i> $20k - $25k</li>
                                <li><i class="lni lni-map-marker"></i> Delaware, USA</li>
                            </ul>
                        </div>
                        <div class="job-button">
                            <ul>
                                <li><a href="job-details.html">Apply</a></li>
                                <li><span>full time</span></li>
                            </ul>
                        </div>
                    </div>


                    <div class="single-job wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                        <div class="job-image">
                            <img src="assets/images/jobs/img6.png" alt="#">
                        </div>
                        <div class="job-content">
                            <h4><a href="job-details.html">Product Designer</a></h4>
                            <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                week. All leads are pre-scheduled. </p>
                            <ul>
                                <li><i class="lni lni-website"></i><a href="#"> winbrans.com</a></li>
                                <li><i class="lni lni-dollar"></i> $20k - $25k</li>
                                <li><i class="lni lni-map-marker"></i> New York, USA</li>
                            </ul>
                        </div>
                        <div class="job-button">
                            <ul>
                                <li><a href="job-details.html">Apply</a></li>
                                <li><span>full time</span></li>
                            </ul>
                        </div>
                    </div>


                    <div class="single-job wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                        <div class="job-image">
                            <img src="assets/images/jobs/img8.png" alt="#">
                        </div>
                        <div class="job-content">
                            <h4><a href="job-details.html">Android Developer</a></h4>
                            <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                week. All leads are pre-scheduled. </p>
                            <ul>
                                <li><i class="lni lni-website"></i><a href="#"> androidplex.com</a></li>
                                <li><i class="lni lni-dollar"></i> $20k - $25k</li>
                                <li><i class="lni lni-map-marker"></i> Cupertino, USA</li>
                            </ul>
                        </div>
                        <div class="job-button">
                            <ul>
                                <li><a href="job-details.html">Apply</a></li>
                                <li><span>Part Time</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="pagination center wow fadeInUp" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                        <ul class="pagination-list">
                            <li><a href="#"><i class="lni lni-arrow-left"></i></a></li>
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i class="lni lni-arrow-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section> */}