import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import FadeLoader from 'react-spinners/FadeLoader'
import { config } from '../../config';
import { fetchAnnouncements } from '../../features/Announcement/actions';
import BsTagFill from '@meronex/icons/bs/BsTagFill';


export default function SectionAnnouncement(){

    let dispatch = useDispatch();
    let announcements = useSelector(state => state.announcements);

    React.useEffect(() => {
      dispatch(fetchAnnouncements())
    }, [dispatch]);

    return(
        <section className="blog_area section-padding">
        <div className="container">
            <div className="row">
                    <div className="col-lg-12">
                        <header className="section-header mb-5">
                            <h2>Pengumuman</h2>
                            <p>Pengumuman untuk informasi kamu</p>
                        </header>
                    </div>
                    <div className="col-lg-12">
                    {announcements.status === 'process' && !announcements.data.length ? 
                      <div className="flex justify-center text-center mb-4">
                            <FadeLoader
                                color="#7b6eea"
                                className="mb-4"
                            />
                        </div> : null}
                    </div>
                <div className="col-lg-8 mb-5 mb-lg-0">

                  
                        
                    <div className="blog_left_sidebar">

                        {announcements.data.map((announcement,index) => {

                            return <article className="blog_item">
                            <div className="blog_item_img">
                                <img className="card-img rounded-0" src={`${config.api_host}/upload/announcement/${announcement.image_url}`} alt={index} />
                                <Link to={`/announcement/${announcement._id}`} className="blog_item_date">
                                    <h3>15</h3>
                                    <p>Jan</p>
                                </Link>
                            </div>

                            <div className="blog_details">
                                <Link to={`/announcement/${announcement._id}`} className="d-inline-block" >
                                    <h2>{announcement.title}</h2>
                                </Link>
                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                    he earth it first without heaven in place seed it second morning saying.</p>
                               <div><BsTagFill/>{announcement.category.name}</div>
                            </div>

                            </article>

                        })}

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog_right_sidebar">
                        {/* <aside class="single_sidebar_widget search_widget">
                            <form action="#">
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder='Search Keyword'
                                           />
                                        <div class="input-group-append">
                                            <button class="btns" type="button"><i class="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                    type="submit">Search</button>
                            </form>
                        </aside> */}

                        {/* <aside class="single_sidebar_widget post_category_widget">
                            <h4 class="widget_title">Category</h4>
                            <ul class="list cat-list">
                                <li>
                                    <a href="#" class="d-flex">
                                        <p>Resaurant food</p>
                                        <p>(37)</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="d-flex">
                                        <p>Travel news</p>
                                        <p>(10)</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="d-flex">
                                        <p>Modern technology</p>
                                        <p>(03)</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="d-flex">
                                        <p>Product</p>
                                        <p>(11)</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="d-flex">
                                        <p>Inspiration</p>
                                        <p>21</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="d-flex">
                                        <p>Health Care (21)</p>
                                        <p>09</p>
                                    </a>
                                </li>
                            </ul>
                        </aside> */}

                        {/* <aside className="single_sidebar_widget popular_post_widget">
                            <h3 className="widget_title">Recent Post</h3>
                            <div className="media post_item">
                                <img src="assets/img/post/post_1.png" alt="post" />
                                <div className="media-body">
                                    <a href="single-blog.html">
                                        <h3>From life was you fish...</h3>
                                    </a>
                                    <p>January 12, 2019</p>
                                </div>
                            </div>
                        </aside> */}

                    </div>
                </div>
            </div>
        </div>
    </section>
    )

}