import React from "react";
import axios from "axios";
import Moment from "react-moment";
import parse from "html-react-parser";
const GLOBAL = require("../../commonConstants.js");
const photoUrl = GLOBAL.BASE_URL + "photo";
const photoUrl1 = GLOBAL.BASE_URL + "photos-filter";
const assetUrl = GLOBAL.assetUrl;

function maps(data) {
  var uniqueArry = [];
  var unique = data.filter((value, index, array) => {
    let abc = new Date(value.created_date);
    uniqueArry.push(abc.getFullYear());
  });
  const uniqueArr = [...new Set(uniqueArry)];

  return uniqueArr;
}
function Photos() {
  const [getValue, setValue] = React.useState(null);
  const [getValues, setValues] = React.useState(null);
  const [getPhoto, setPhoto] = React.useState(null);
  const [getFilter, setFilter] = React.useState('');
  var url = "";
  React.useEffect(() => {
    axios.get(photoUrl).then((response) => {
      setPhoto(response.data);
    });
	if (getValue && getValue != null && getValues && getValues != null) {
		url = photoUrl1 + "?date=" + getValue + "&id=" + getValues;
		axios.get(url).then((response) => {
		  setFilter(response.data);
		});
	  }
  }, [getValue]);
  if (!getPhoto) return null;
 
  return (
    <>
      <section
        className="isgf-breadcum isgf_photos_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/photo/photo-bg.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>ISGF Photos</h1>
            <p>
              Home {">"} Media {">"} ISGF Photos
            </p>
          </div>
        </div>
      </section>
      <section className="isgf_vidoes isgf_photoes">
        <div className="container">
          <div className="heading mb-3">
            <h2>ISGF Photos</h2>
          </div>
          <div className="isgf_accordion">
            <div className="accordion" id="accordionExample">
              {getPhoto &&
                getPhoto.map((data, index) => (
                  <div className="accordion-item">
                    <h2 className="accordion-header bg-green" id="heading1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseOne${index}`}
                        aria-expanded="false"
                        aria-controls={`collapseOne${index}`}
                      >
                        {data.name}
                      </button>
                    </h2>
                    <div
                      id={`collapseOne${index}`}
                      className="accordion-collapse collapse p-3"
                      aria-expanded="false"
                      aria-labelledby="heading1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body nav-tabs-body">
                        <ul className="nav nav-tabs mt-3" id="myTab">
                          <li className="nav-item">
                            <a
                              onClick={(event) => setValue("")}
                              className="nav-link active"
                              data-bs-toggle="tab"
                            >
                              All
                            </a>
                          </li>
                          {maps(data.photo_list) &&
                            maps(data.photo_list).map((data1, index1) => (
                              <li className="nav-item">
                                <a
                                  onClick={(event) => {
                                    setValue(data1);
                                    setValues(data.id);
                                  }}
                                  className="nav-link "
                                  data-bs-toggle="tab"
                                >
                                  {data1}
                                </a>
                              </li>
                            ))}
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane fade show active" id="t21">
                            <div className="row">
                              {data.id == getValues ? (
                                <>
                                  {getFilter &&
                                    getFilter.map((data1, index) => (
                                      <div className="col-md-4 mt-3">
                                        <div className="isgf_bluebox  mt-3">
                                          <h4 className="heading m-0 isgf_blue_heading">
                                            {data1.title}
                                          </h4>
                                          <div className="isgf_about_point">
                                            <p className="data">
                                              <Moment format="DD MMMM YYYY">
                                                {data1.created_date}
                                              </Moment>
                                            </p>
                                            <a href={data1.url} target="_blank">
                                              <div className="video">
                                                <img
                                                  src={
                                                    assetUrl +
                                                    "/public/photo/" +
                                                    data1.image
                                                  }
                                                  className="img-fluid"
                                                  alt="No Image"
                                                />
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </>
                              ) : (
                                <>
                                  {data.photo_list &&
                                    data.photo_list.map((data1, index) => (
                                      <div className="col-md-4 mt-3">
                                        <div className="isgf_bluebox  mt-3">
                                          <h4 className="heading m-0 isgf_blue_heading">
                                            {data1.title}
                                          </h4>
                                          <div className="isgf_about_point">
                                            <p className="data">
                                              <Moment format="DD MMMM YYYY">
                                                {data1.created_date}
                                              </Moment>
                                            </p>
                                            <a href={data1.url} target="_blank">
                                              <div className="video">
                                                <img
                                                  src={
                                                    assetUrl +
                                                    "/public/photo/" +
                                                    data1.image
                                                  }
                                                  className="img-fluid"
                                                  alt="No Image"
                                                />
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Photos;
