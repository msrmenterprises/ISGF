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
const standardsDetail = GLOBAL.BASE_URL+"standardMappings-details/";

let url = window.location.pathname;
let standards_data = url.split("/");

function StandardsDetail() {
  const slug = useParams();
  const [getStandardsDetail, setStandardsDetail] = React.useState(null);
  React.useEffect(() => {
    axios.get(standardsDetail + (slug.id)).then((response) => {
      setStandardsDetail(response.data);
    });
  }, [(slug.id)]);
  if (!getStandardsDetail) return null;
    // console.log(getStandardsDetail)
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
            <h1>{getStandardsDetail.title}</h1>
            <p>
              Home {">"} ISGF {">"} ISGF StandardsDetail {">"} {getStandardsDetail.title}
            </p>

          </div>
        </div>
      </section>
      <section className="grid_modernization">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <div className="heading mb-3">
                <h2>{getStandardsDetail.title} </h2>
            </div>
<table className="table">
  <thead className="bg-blue">
    <tr>
      <th width="10%" scope="col">Standard Body</th>
      <th width="10%" scope="col">Reference</th>
      <th width="30%" scope="col">Title</th>
      <th width="30%" scope="col">Description</th>
      <th width="10%" scope="col">Publishing Year</th>
      <th width="10%" scope="col">Purchase Link</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>{((getStandardsDetail.standard != null))  ? <>{getStandardsDetail.standard} </>: <> </>} </td>
      <td>{((getStandardsDetail.reference != null))  ? <>{getStandardsDetail.reference} </>: <> </>} </td>
      <td>{((getStandardsDetail.title != null))  ? <>{parse(`${getStandardsDetail.title}`)} </>: <> </>}</td>
      <td>{((getStandardsDetail.description != null))  ? <>{parse(`${getStandardsDetail.description}`)} </>: <> </>}</td>
      <td>{((getStandardsDetail.publishing_year != null))  ? <>{getStandardsDetail.publishing_year} </>: <> </>} </td>
      <td><a href={getStandardsDetail.purchase_link} target="_blank" className="btn btn-orange-sm" > Click Here</a></td>
    </tr>
  </tbody>
</table>



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
export default StandardsDetail;
