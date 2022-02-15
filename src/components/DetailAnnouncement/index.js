import React from 'react'
import { useRouteMatch } from 'react-router-dom';

import { getAnnouncementById } from '../../api/announcement';

import FadeLoader from 'react-spinners/FadeLoader'
import { config } from '../../config';

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnouncements } from '../../features/Announcement/actions';
import moment from 'moment'


export default function DetailAnnouncement(){

   let dispatch = useDispatch();
   let announcements = useSelector(state => state.announcements);

   React.useEffect(() => {
     dispatch(fetchAnnouncements())
   }, [dispatch]);


    let [announcement, setAnnouncement] = React.useState([]);
    let [error, setError] = React.useState('');
    let [status, setStatus] = React.useState('process');

    // get params
    let {params} = useRouteMatch();

    React.useEffect(() => {
        getAnnouncementById(params?.announcement_id)
            .then(({ data }) => {

                if (data?.error) {
                    setError(data.message || "Terjadi kesalahan yang tidak diketahui");
                }
                setAnnouncement(data)
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

    return(
      <section className="blog_area single-post-area section-padding">
      <section className="section-details-header"></section>
         <section className="section-details-content mb-5">
            <div className="container">
               <div className="row">
                  <div className="col p-0">
                        <nav aria-label="breadcrumb">
                           <ol className="breadcrumb mx-3">
                              <li className="breadcrumb-item" aria-current="page" style={{color: '#304970'}}>
                                    Pengumuman
                              </li>
                              <li className="breadcrumb-item active" aria-current="page">
                                    {announcement?.data.title}
                              </li>
                           </ol>
                        </nav>
                  </div>
               </div>
            </div>
         </section>
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 posts-list">
                     <div className="single-post">
                        <div className="feature-img">
                           <img className="img-fluid" src={`${config.api_host}/upload/announcement/${announcement?.data.image_url}`} alt="" />
                        </div>
                        <div className="blog_details">
                           <h2>
                              {announcement?.data.title}
                           </h2>
                           <p style={{textAlign: 'justify', textJustify: 'inter-word'}} dangerouslySetInnerHTML={{ __html: announcement?.data.description }} />
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="blog_right_sidebar">
                        {/* <aside className="single_sidebar_widget post_category_widget">
                           <h4 className="widget_title">Category</h4>
                           <ul className="list cat-list">
                              <li>
                                 <a href="#" className="d-flex">
                                    <p>Resaurant food</p>
                                    <p>(37)</p>
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="d-flex">
                                    <p>Travel news</p>
                                    <p>(10)</p>
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="d-flex">
                                    <p>Modern technology</p>
                                    <p>(03)</p>
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="d-flex">
                                    <p>Product</p>
                                    <p>(11)</p>
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="d-flex">
                                    <p>Inspiration</p>
                                    <p>(21)</p>
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="d-flex">
                                    <p>Health Care</p>
                                    <p>(21)</p>
                                 </a>
                              </li>
                           </ul>
                        </aside> */}

                        {announcements.status === 'process' && !announcements.data.length ? 
                           <div className="flex justify-center text-center mb-4">
                                 <FadeLoader
                                    color="#7b6eea"
                                    className="mb-4"
                                 />
                           </div> : null}

                        {announcements.data.map((announcement, index) => {
                           return <aside className="single_sidebar_widget popular_post_widget">
                           <h3 className="widget_title">Berita yang lain</h3>
                           <div className="media post_item">
                              <img src={`${config.api_host}/upload/announcement/${announcement.image_url}`} alt={index} className="w-20" style={{width: '100%', height: '100&'}}/>
                              <div className="media-body mt-2">
                                 <Link to={`/announcement/${announcement._id}`}>
                                    <h3 className="post-title">{announcement.title}</h3>
                                 </Link>
                                 <p>{moment(announcement.createdAt).format('Do MMMM YYYY')}</p>
                              </div>
                           </div>
                           </aside>
                        })}

                     
                     </div>
                  </div>
               </div>
            </div>
     </section>
    )

}