import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import Moment from "react-moment";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GLOBAL = require('../../commonConstants.js');

const assetUrl = GLOBAL.assetUrl;
const trainingDetail = GLOBAL.BASE_URL+"course-details/";

let url = window.location.pathname;
let training_data = url.split("/");

function TrainingsDetail() {
  const slug = useParams();
  const [getTraining, setTraining] = React.useState(null);
  React.useEffect(() => {
    axios.get(trainingDetail + (slug.id)).then((response) => {
      setTraining(response.data);
    });
  }, [(slug.id)]);
  if (!getTraining) return null;
    // console.log(getTraining)
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
            <h1>{getTraining.program}</h1>
            <p>
              Home {">"} ISGF {">"} ISGF Trainings {">"} {getTraining.program}
            </p>
           
          </div>
        </div>
      </section>
      <section className="grid_modernization">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <div className="heading mb-3">
                <h2>{getTraining.program} </h2>
            </div>
              <div className="grid_modernization_topbox mb-3">
                {getTraining.description != null ? (
                      <>{parse(`${getTraining.description}`)}</>
                    ) : (
                      <> </>
                    )}

{((getTraining.brochure != null))  ? <><a href={getTraining.brochure} className="btn btn-orange" target="_blank">Download Report</a> </>: <> </>}

                    
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

export default TrainingsDetail;
