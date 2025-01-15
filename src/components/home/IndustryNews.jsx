import React from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
const GLOBAL = require('../../commonConstants');
const news = GLOBAL.BASE_URL + "news_home";
const assetUrl = GLOBAL.assetUrl;
const IndustryNews = () => {
  const [loading, setLoading] = React.useState(false);
  const [getNews, setNews] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    axios.get(news).then((response) => {
      setNews(response.data);
      setLoading(false);
    });
  }, []);
  if (!getNews) return null;

  return (
     <>
    {loading ?
      <>
      <div className="site-loader">
        Loading...
      </div>
      </>
     : <>
    <div
      className="industry-news sec-padd"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/news-bg.png"
          })`,
      }}
    >
      <div className="container">
        <div className="heading mb-3">
          <h2>Industry News</h2>
          <NavLink to="/smart-grid-news" className="btn btn-white view-all btn-s" onClick={() => window.scrollTo(0, 0)}>
            View All
          </NavLink>
        </div>

        <div className="row g-4">
          {(getNews) && getNews.map((data, index) => (
            <div className="col-md-4 col-sm-4">
              {((index <= 8)) ? <>

                <div className="home-n">
                  <div className="row g-4">
                    <div className="col-5">
                      <img src={assetUrl + "/public/news_img/" + data.image} alt="pic" width="100%" />
                    </div>
                    <div className="col-7">
                      <div className="content">
                        <div className="name">
                          {(data.title)}
                        </div>
                        <Link onClick={() => window.scrollTo(0, 0)} className="link" to={"../news-detail/" + data.slug}>View</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </> : <> </>}
            </div>
          ))}
        </div>

      </div>
    </div>
    </>
    }
    </>
  )
}
export default IndustryNews;