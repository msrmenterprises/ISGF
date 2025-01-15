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
const trainings = GLOBAL.BASE_URL+"course-tags";
let url = window.location.pathname;
let trainingsTag = url.split("/");

function TrainingsTag() {
  const slug = useParams();
  const [getValue, setValue] = React.useState(null);
  const navigate = useNavigate();  
  const [getTrainings, setTrainings] = React.useState(null);

  const newUrl = trainings + "?multiTag=" + (slug.id);
  var newUrl2 = '';

  React.useEffect(() => {
    if (getValue && getValue != null) {
      newUrl2 = newUrl + "&singleTag=" + getValue;
    } else {
      newUrl2 = newUrl;
    }
    axios.get(newUrl2).then((response) => {
      setTrainings(response.data);
    });
  }, [getValue,(slug.id)]);
  if (!getTrainings) return null;
    // console.log(gettrainings)
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
            <h1>ISGF Trainings</h1>
            <p>
              Home {">"} ISGF {">"} ISGF Trainings
            </p>
           
          </div>
        </div>
      </section>
      <section className="grid_modernization">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <div className="heading mb-3">
                <h2>ISGF Trainings </h2>
            </div>
            {(getTrainings.news_list) &&
            (getTrainings.news_list).map((data, index) => (
            <div className="gird_modernization_content mb-3 mx-0">
                <h5>
                    <Link as="link" to={"../trainings-detail/" + data.course_slug}><i className="fa fa-angle-double-right"></i> {data.program}</Link>
                </h5>
            </div>
            ))}

            <div className="my-4 tags">
              {(getTrainings.tag_list) &&
                (getTrainings.tag_list).map((data1, index) => (
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

export default TrainingsTag;
