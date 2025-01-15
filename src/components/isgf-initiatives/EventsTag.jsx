import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import Moment from "react-moment";
import parse from "html-react-parser";
import { NavLink, useNavigate,Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GLOBAL = require('../../commonConstants.js');

const assetUrl = GLOBAL.assetUrl;
const eventTag = GLOBAL.BASE_URL+"event-tags";
let url = window.location.pathname;
let eventData = url.split("/");

function EventsTag() {
  const slug = useParams();
  const [getValue, setValue] = React.useState(null);
  const navigate = useNavigate();
  const [getEvent, setEvent] = React.useState(null);

  const newUrl = eventTag + "?multiTag=" + (slug.id);
  var newUrl2 = '';

  React.useEffect(() => {
   if (getValue && getValue != null) {
      newUrl2 = newUrl + "&singleTag=" + getValue;
    } else {
      newUrl2 = newUrl;
    }
    axios.get(newUrl2).then((response) => {
      setEvent(response.data);
    });
  }, [getValue,(slug.id)]);
  if (!getEvent) return null;
    // console.log(getEvent)
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
            <h1>ISGF Events</h1>
            <p>
              Home {">"} ISGF {">"} ISGF Events
            </p>
           
          </div>
        </div>
      </section>
      <section className="grid_modernization">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <div className="heading mb-3">
                <h2>ISGF Event </h2>
            </div>
            {(getEvent.news_list) &&
            (getEvent.news_list).map((data, index) => (
            <div className="gird_modernization_content mb-3 mx-0">
                <h5>
                    <Link as="link" to={"../events-detail/" + data.id}><i className="fa fa-angle-double-right"></i> {data.title}</Link>

                </h5>
            </div>
            ))}
             

           <div className="my-4 tags">
              {(getEvent.tag_list) &&
                (getEvent.tag_list).map((data1, index) => (
                  <button type="button" onClick={(e) => setValue(data1.id)} className={`btn btn-gray${(getValue==(data1.id)) ? " active" : ""}`}>
                  {data1.title}
                </button>
              ))}
            </div>
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

export default EventsTag;
