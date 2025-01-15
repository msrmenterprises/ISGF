import React from 'react';
import Media from '../reusable/Media';
import axios from "axios";
import Moment from 'react-moment';
import parse from 'html-react-parser';
import { NavLink, Link } from "react-router-dom";
import Sidebar from '../reusable/Sidebar';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const news = GLOBAL.BASE_URL+"news";

const latestNews = GLOBAL.BASE_URL+"latest-news";

function SmartGridNews() {

  const [getLatestNews, setLatestNews] = React.useState(null);
  const [getNews, setNews] = React.useState(null);
  React.useEffect(() => {
    axios.get(news).then((response) => {
      setNews(response.data);
    });
    axios.get(latestNews).then((response) => {
      setLatestNews(response.data);
    });
  }, []);
  if (!getNews) return null;
  if (!getLatestNews) return null;
 
  return (
    <>
      <section className="isgf-breadcum isgf_press_release_breadcum" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/press-release/press-release-banner.jpg"
          })`,
      }}>
        <div className="container">
          <div className="isgf-breadcum-box">
              <h1>Industry News</h1>
              <p>Home {'>'} Resource Center {'>'}  Industry News</p>
          </div>
        </div>
      </section>
      <section className="industry_news_dropdown">
        <div className="container">
          <div className="heading mb-3">
            <h2>Industry News</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 ">
              <div className="benefits_membership">

                    <div className="row g-4 industry_news_box_main">
                      <div className="col-md-4">
                        <div className="in-news-box first-box">
                          <div className='name'>Latest News</div>
                          <div className='pic'>
                            <img src="images/industry-news/news-logo.jpg" alt="icon" />
                          </div>
                          <a id="show-hidden-menu1" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal-1">View</a>
                        </div>


                      </div>
                      {(getNews) && getNews.map((data, index) => (
                        <div className="col-md-4">
                          <div className="in-news-box">
                            <div className='name'>{(data.title)} </div>
                            <div className='pic'>
                              <img src={assetUrl + "/public/Category_img/" + data.image} alt="pic" />
                            </div>

                            <Link onClick={() => window.scrollTo(0, 0)} as="link" to={"../news/" + data.slug}>View</Link>

                          </div>

                        </div>
                      ))}
                    </div>

                  </div>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-body">
              <h3 className="mb-3">Latest News</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="">
                {(getLatestNews) && getLatestNews.map((data, index) => (
                  <div className="content p-3">
                    <p className="p1">{data.world}  |  <Moment format="dddd, DD MMMM YYYY">
                      {data.created_date}
                    </Moment></p>
                    <p className="mb-0">{data.title}</p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default SmartGridNews