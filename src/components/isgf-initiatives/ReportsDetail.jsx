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
const reportsDetail = GLOBAL.BASE_URL+"technicalPaper-details/";

let url = window.location.pathname;
let reports_data = url.split("/");

function ReportsDetail() {
  const slug = useParams();
  const [getReports, setReports] = React.useState(null);
  React.useEffect(() => {
    axios.get(reportsDetail + (slug.id)).then((response) => {
      setReports(response.data);
    });
  }, [(slug.id)]);
  if (!getReports) return null;
    // console.log(getReports)
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
            <h1>{getReports.title}</h1>
            <p>
              Home {">"} ISGF {">"} ISGF Reportss {">"} {getReports.title}
            </p>
           
          </div>
        </div>
      </section>
      <section className="grid_modernization">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <div className="heading mb-3">
                <h2>{getReports.title} </h2>
            </div>
              <div className="grid_modernization_topbox mb-3">
                  <div className="row g-4">
                    <div className="col-md-3">
                      <img
                      src={assetUrl + "/public/banner_img/" + getReports.image}
                      className=""
                      alt="pic"
                    />
                    </div>
                    <div className="col-md-9">
                      {getReports.description != null ? (
                      <>{parse(`${getReports.description}`)}</>
                    ) : (
                      <> </>
                    )}

                    {((getReports.document != null))  ? <><a href={assetUrl + "/public/banner_img/" + getReports.document} className="btn btn-orange" target="_blank">Download Report</a> </>: <> </>}
                    </div>
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
export default ReportsDetail;
