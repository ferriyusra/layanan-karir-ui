import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import FadeLoader from 'react-spinners/FadeLoader'
import { config } from '../../config';
import { fetchAnnouncements } from '../../features/Announcement/actions';
import BiRightArrowAlt from '@meronex/icons/bi/BiRightArrowAlt';
import moment from 'moment'

export default function SectionAnnouncement() {

    let dispatch = useDispatch();
    let announcements = useSelector(state => state.announcements);

    React.useEffect(() => {
      dispatch(fetchAnnouncements())
    }, [dispatch]);


    return (
        <section id="recent-blog-posts" className="recent-blog-posts">

        <div className="container">
  
        <div className="row">
                <div className="col-lg-12">
                    <header className="section-header"  style={{marginTop: 85 + 'px'}}>
                        <h2>Berita</h2>
                        <p>Temukan informasi berita terbaru.</p>
                    </header>
                    <div className="header-2-1 mb-4">
                        <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
                            <button className="btn d-inline-flex mb-md-0 btn-try text-white">
                                Lihat semua
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          
  
          <div className="row">

          {announcements.status === 'process' && !announcements.data.length ? 
                      <div className="flex justify-center text-center mb-4">
                            <FadeLoader
                                color="#7b6eea"
                                className="mb-4"
                            />
                        </div> : null}
  
           {announcements.data.map((announcement, index) => {
             return  <div className="col-lg-4">
             <div className="post-box">
               <div className="post-img"><img src={`${config.api_host}/upload/announcement/${announcement.image_url}`} className="img-fluid" alt={index} /></div>
               <span className="post-date">{moment(announcement.createdAt).format('Do MMMM YYYY')}</span>
               <h3 className="post-title">{announcement.title}</h3>
               <Link to={`/announcements/${announcement._id}`} className="readmore stretched-link mt-auto"><span>Read More</span><BiRightArrowAlt/></Link>
             </div>
           </div>
           })}
  
          </div>
  
        </div>
  
      </section>
    )

}