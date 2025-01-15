import React, { useState } from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import Moment from "react-moment";
import parse from "html-react-parser";
import { NavLink, useNavigate ,Link} from "react-router-dom";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const search = GLOBAL.BASE_URL+"search/";
let url = window.location.pathname;


function Search() {
  const slug = useParams();
  const [getValue, setValue] = React.useState(null);
  const navigate = useNavigate();
  const [getSearch, setSearch] = React.useState(null);
  React.useEffect(() => {

    axios.get(search+(slug.id)).then((response) => {
      setSearch(response.data);
    });
  }, [(slug.id)]);
  if (!getSearch) return null;
 
  return (
    <>
      <section
        className="isgf-breadcum isgf_grid_modernization_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/grid-modernization/grid-modernization-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>Search Result</h1>
            <p>
              Home {">"} ISGF {">"} Search Result
            </p>

          </div>
        </div>
      </section>
      <section className="grid_modernization">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <div className="heading mb-3">
                <h2>All News </h2>
            </div>
            {((getSearch.news).length > 0 )  ? <>
            {(getSearch.news) &&
            (getSearch.news).map((data, index) => (
            <div className="gird_modernization_content mb-3 mx-0">
                <h5>
                    <Link as="link" to={"../news-detail/" + data.slug}><i className="fa fa-angle-double-right"></i> {data.title}
                   </Link>
                </h5>
            </div>
            ))}
            </>: <> <p>No data found</p> </>}
            <div className="heading mb-3">
                <h2>All Events </h2>
            </div>
            {((getSearch.event).length > 0 )  ? <>
            {(getSearch.event) &&
            (getSearch.event).map((data, index) => (
            <div className="gird_modernization_content mb-3 mx-0">
                <h5>
                    <a target="_blank" href={data.url}><i className="fa fa-angle-double-right"></i> {data.title}
                   </a>
                </h5>
            </div>
            ))}
            </>: <><p>No data found</p> </>}
            <div className="heading mb-3">
                <h2>All Webinar </h2>
            </div>
            {((getSearch.webinar).length > 0)  ? <>
            {(getSearch.webinar) &&
            (getSearch.webinar).map((data, index) => (
            <div className="gird_modernization_content mb-3 mx-0">
                <h5>
                    <a href={data.readmore}><i className="fa fa-angle-double-right"></i> {data.title}
                   </a>
                </h5>
            </div>
            ))}
            </>: <> <p>No data found.</p>   </>}
            <div className="heading mb-3">
                <h2>All Whitepaper </h2>
            </div>
            {((getSearch.whitepaper).length > 0)  ? <>
            {(getSearch.whitepaper) &&
            (getSearch.whitepaper).map((data, index) => (
            <div className="gird_modernization_content mb-3 mx-0">
                <h5>
                    <a href={assetUrl + "/public/banner_img/" + data.document} target="_blank"><i className="fa fa-angle-double-right"></i> {data.title}
                   </a>
                </h5>
            </div>
            ))}
            </>: <> <p>No data found</p> </>}

              <div className="row">
                <div className="col-md-12">
                  <a
                    onClick={() => navigate(-1)}
                    className="btn btn-blue btn-previous"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/grid-modernization/privew.png`}
                      className="previous-img"
                    />{" "}
                    Previous
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
