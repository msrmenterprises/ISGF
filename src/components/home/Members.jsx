import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";

const GLOBAL = require('../../commonConstants');
const news = GLOBAL.BASE_URL + "news_home";
const assetUrl = GLOBAL.assetUrl;
const memberCategory = GLOBAL.BASE_URL + "memberCategory";

const members = {
  autoplayHoverPause:true,
  margin: 30,
  responsiveClass: true,
  loop: true,
  nav: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
};


const Achievements = () => {
  const [loading, setLoading] = React.useState(false);
  const [getMemberCategory, setMemberCategory] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    axios.get(memberCategory).then((response) => {
      setMemberCategory(response.data);
      setLoading(false);
    });
  }, []);

  if (!getMemberCategory) return null;

  return (
    <>
    {loading ?
      <>
      <div className="site-loader">
        Loading...
      </div>
      </>
     : <>
      <div className="member-logo sec-padd" >
        <div className="container">
          <div className="heading mb-3">
            <h2>ISGF Members</h2>
            <NavLink to="members-list" onClick={() => window.scrollTo(0, 0)} className="btn btn-white btn-s">View All</NavLink>
          </div>
          <div className="swiper-container logo-m">
            <div className="swiper-wrapper">
              <OwlCarousel className='owl-theme' loop margin={10} nav {...members}>


                {(getMemberCategory) && getMemberCategory.map((data, index) => (
                  <div className="item ">
                    <a href={data.link} target="_blank">
                      <img src={assetUrl + "/public/Category_img/" + data.image} />
                    </a>
                    <h6>{data.title}</h6>
                  </div>
                ))}

              </OwlCarousel>
            </div>

          </div>
        </div>
      </div>
      <div className="b-member sec-padd">
        <div className="container">
          <div className="heading mb-3">
            <h2>Become a Member</h2>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p>ISGF members are from the ministries, government institutions, regulatory bodies, utilities, industry,
                non-profit organizations, educational and research entities and students from renowned institutions.</p>
            </div>
            <div className="col-md-4">
              <NavLink to="/become-a-member" className="btn btn-green">Know More About ISGF Membership</NavLink>
            </div>
          </div>
        </div>
      </div>
       </>
    }
    </>
  )
}
export default Achievements;