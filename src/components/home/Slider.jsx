import React from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Loader from "react-js-loader";

const GLOBAL = require('../../commonConstants');
const banner = GLOBAL.BASE_URL + "banners";
const assetUrl = GLOBAL.assetUrl;

const homeslider = {
  margin: 30,
  responsiveClass: true,
  loop: true,
  nav: true,
  autoplay: true,
  // navText: [
  //   "<i class='fa fa-chevron-left'></i>",
  //   "<i class='fa fa-chevron-right'></i>",
  // ],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

const Slider = () => {
  const [getBanner, setBanner] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios.get(banner).then((response) => {
      setBanner(response.data);
      setLoading(false);
    });
  }, []);
  if (!getBanner) return null;
  // console.log(loading);
  return (
    <>
      {loading ?
        <>
          <div className="site-loader">
            Loading...
          </div>
        </>
        : <>
          <div className="main-banner">
            <div className="swiper-container main-banner">
              <div className="swiper-wrapper">
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={10}
                  nav
                  {...homeslider}
                >
                  {(getBanner) && getBanner.map((data, index) => (
                    <div
                      className="item swiper-slide"
                      style={{
                        backgroundImage: `url(${assetUrl + "/public/banner_img/" + data.image})`,
                      }}
                    >
                      <div className="container">
                        <h2>
                          {data.heading}
                        </h2>
                        <p>{data.sub_heading}</p>
                        <a href={data.link} exact className="btn btn-orange">
                          Read More
                        </a>
                      </div>
                    </div>
                  ))}

                </OwlCarousel>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}
export default Slider;