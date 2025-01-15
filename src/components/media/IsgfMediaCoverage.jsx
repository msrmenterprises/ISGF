import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import parse from "html-react-parser";
const GLOBAL = require('../../commonConstants.js');
const media = GLOBAL.BASE_URL+"media-coverage";
const media_filter = GLOBAL.BASE_URL+"media_coverage_filter";
const assetUrl = GLOBAL.assetUrl;

function maps(data){
	var uniqueArry = [];
	var unique = data.filter((value, index, array) => {
	 let abc = new Date(value.year);
	  uniqueArry.push(abc.getFullYear());
	}
	);
	const uniqueArr = [...new Set(uniqueArry)];
	return uniqueArr;
  }

function IsgfMediaCoverage() {
  const [getMedia, setMedia] = React.useState(null);
  const [getValue, setValue] = React.useState(null);
  const [getValues, setValues] = React.useState(null);
  const [getFilter, setFilter] = React.useState(null);
  var url = "";
  React.useEffect(() => {
    axios.get(media).then((response) => {
      setMedia(response.data);
    });
    if (getValue && getValue != null) {
      url = media_filter + "?date=" + getValue+"&id="+getValues;
      axios.get(url).then((response) => {
        setFilter(response.data);
      });
    }  
    
  }, [getValue]);
  if (!getMedia) return null;
  // console.log(getMedia);
  return (
    <>
      <section
        className="isgf-breadcum isgf_media_coverage_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/media-covrage/media-covrage-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>ISGF Media Coverage</h1>
            <p>
              Home {">"} Media {">"} ISGF Media Coverage
            </p>
          </div>
        </div>
      </section>
      <section className="isgf_vidoes media-coverage ">
        <div className="container">
          <div className="heading mb-3">
            <h2>ISGF Media Coverage</h2>
          </div>
          <div className="isgf_accordion">
            <div className="accordion" id="accordionExample">
              {getMedia &&
                getMedia.map((data, index) => (
                  <div className="accordion-item">
                    <h2 className="accordion-header bg-green" id="heading1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseOne${index}`}
                        aria-expanded="false"
                        aria-controls="collapse1"
                      >
                        {data.name}
                      </button>
                    </h2>
                    <div
                      id={`collapseOne${index}`}
                      className="ccordion-collapse collapse"
                      aria-labelledby="heading1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body nav-tabs-body">
                        <ul className="nav nav-tabs mt-3 mb-3" id="myTab">
                          <li className="nav-item">
                            <a
                              onClick={(event) => setValue("")}
                              className="nav-link active"
                              data-bs-toggle="tab"
                            >
                              All
                            </a>
                          </li>
                          {maps(data.list) &&
													(maps(data.list)).map((data1, index1) => (
													<li className="nav-item">
														<a onClick={event => {setValue(data1);setValues(data.id);} }    className="nav-link " data-bs-toggle="tab">
															{data1}
														</a>
													</li>
													))}
                         
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane fade show active" id="t22">
                            <div className="row">
                              <div className="col-md-12">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th scope="col">S.No</th>
                                      <th scope="col">News Categaory</th>
                                      <th scope="col">
                                        Outlet and Journalist Name
                                      </th>
                                      <th scope="col">Media Type</th>
                                      <th scope="col">News Headline</th>
                                      <th scope="col">Media Category</th>
                                      <th scope="col">Industry</th>
                                      <th scope="col">Link</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                  {((data.id == getValues))  ? 
                            				<>
                                    {getFilter &&
                                      getFilter.map((data1, index) => (
                                        <tr>
                                          <td className="no-blue" scope="row">
                                            {index + 1}
                                          </td>
                                          <td>{data1.categaory} </td>
                                          <td>
                                            {data1.outlet_journalist_name}
                                          </td>
                                          <td>{data1.media_type}</td>
                                          <td>{data1.headline}</td>
                                          <td>{data1.media_category}</td>
                                          <td>{data1.industry}</td>

                                          <td>
                                            <a target="_blank"
                                              href={data1.link}
                                              className="btn btn-orange"
                                            >
                                              Click Here
                                            </a>
                                          </td>
                                        </tr>
                                      ))}
                                      </>:
                                      <>
                                      {data.list &&
                                      data.list.map((data1, index) => (
                                        <tr>
                                          <td className="no-blue" scope="row">
                                            {index + 1}
                                          </td>
                                          <td>{data1.categaory} </td>
                                          <td>
                                            {data1.outlet_journalist_name}
                                          </td>
                                          <td>{data1.media_type}</td>
                                          <td>{data1.headline}</td>
                                          <td>{data1.media_category}</td>
                                          <td>{data1.industry}</td>

                                          <td>
                                            <a target="_blank"
                                              href={data1.link}
                                              className="btn btn-orange"
                                            >
                                              Click Here
                                            </a>
                                          </td>
                                        </tr>
                                      ))}
                                      </>}
                                  </tbody>
                                </table>
                                
                              </div>
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

export default IsgfMediaCoverage;
