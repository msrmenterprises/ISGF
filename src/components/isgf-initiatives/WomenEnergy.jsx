import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import parse from "html-react-parser";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Moment from "react-moment";
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;

const women = GLOBAL.BASE_URL+"women-energy";
const womenEnergy =
  GLOBAL.BASE_URL+"women-energy-event";

function WomenEnergy() {
  const [getWomen, setWomen] = React.useState(null);
  const [getWomenEvent, setWomenEvent] = React.useState(null);
  React.useEffect(() => {
    axios.get(women).then((response) => {
      setWomen(response.data);
    });
    axios.get(womenEnergy).then((response) => {
      setWomenEvent(response.data);
    });
  }, []);
  if (!getWomen) return null;
  if (!getWomenEvent) return null;
  return (
    <>
      <section
        className="isgf-breadcum isgf_women_energy_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/woman-energy/woman-energy-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>Women In Energy</h1>
            <p>
              Home {">"} ISGF Initiatives {">"} Women In Energy
            </p>
          </div>
        </div>
      </section>
      <section className="women-energy">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className="heading mb-3">
                <h2>Women In Energy</h2>
              </div>
              {getWomen &&
                getWomen.map((data, index) => (
                  <div className="row">
                    <div className="col-md-12">
                      {parse(`${data.description}`)}
                    </div>
                  </div>
                ))}
              <div className="isgf_accordion">
                <div className="accordion" id="accordionExample">
                  {getWomenEvent &&
                    getWomenEvent.map((data, index) => (
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
                            {data.event_title}
                          </button>
                        </h2>
                        <div
                          id={`collapseOne${index}`}
                          className="accordion-collapse collapse p-3"
                          aria-expanded="false"
                          aria-labelledby="heading1"
                          data-bs-parent="#accordionExample"
                        >
                          {parse(`${data.description}`)}
                          {data.key_point[0] && data.key_point ? (
                            <>
                              <div className="woman-energy-gray">
                                <h3 className="mb-3">
                                  The Key Point of discussions which came from
                                  the National Launch:-
                                </h3>
                                {data.key_point &&
                                  data.key_point.map((data1, index) => (
                                    <div className="woman-li mt-2">
                                      <img src="images/woman-energy/arrow-1.png" />
                                      <p>{data1}</p>
                                    </div>
                                  ))}
                              </div>
                            </>
                          ) : (
                            <> </>
                          )}
                          {data.gallery[0] && data.gallery ? (
                            <>
                              <div className="slider">
                                <div className="carousel-wrapper woman-slider">
                                  <Carousel
                                    infiniteLoop
                                    useKeyboardArrows
                                    autoPlay
                                  >
                                    {data.gallery &&
                                      data.gallery.map((data1, index) => (
                                        <div>
                                          <img
                                            src={
                                              assetUrl +
                                              "/public/uploads/" +
                                              data1.columnone
                                            }
                                            className="img-fluid"
                                          />
                                          <p className="woman-slider-p">
                                            {parse(`${data1.columntwo}`)}{" "}
                                          </p>
                                        </div>
                                      ))}
                                  </Carousel>
                                </div>
                              </div>
                            </>
                          ) : (
                            <> </>
                          )}
                          <div className="woman-energy-gray">
                            <h3 className="mb-3">
                              Please Refer Below For More Details On The Session
                            </h3>
                            <div className="row g-4">

                            {((data.agenda != null))  ? <><div className="col-md-6 col-sm-6">
                                <div className="ag-box">
                                  <div className="name">Agenda</div>
                                  <img src="images/woman-energy/agenda-icon-1.png" alt="pic"/>
                                  <a
                                    target="_blank"

                                    href={assetUrl + "/public/women_energy/" + data.agenda}>
                                    More Details
                                  </a>
                                </div>
                              </div> </>: <> </>}

                              {((data.brochure != null))  ? <>
                                <div className="col-md-6 col-sm-6">
                                <div className="ag-box">
                                  <div className="name">Brochure</div>
                                  <img
                                    src="images/woman-energy/agenda-icon-2.png" alt="pic"/>
                                  <a target="_blank" href={assetUrl +"/public/women_energy/" +data.brochure}>
                                    More Details
                                  </a>
                                </div>
                              </div>
                              </>: <> </>}

                              {((data.recording_session != null))  ? <>
                               <div className="col-md-6 col-sm-6">
                                <div className="ag-box">
                                  <div className="name">Recording Of The Session</div>
                                  <img src="images/woman-energy/agenda-icon-3.png" alt="pic"/>
                                  <a target="_blank"
                                    href={data.recording_session} >
                                    More Details
                                  </a>
                                </div>
                              </div>
                              </>: <> </>}

                              {((data.photo_session != null))  ? <>
                              <div className="col-md-6 col-sm-6">
                                <div className="ag-box">
                                  <div className="name">Photo Of The Session</div>
                                  <img src="images/woman-energy/agenda-icon-4.png" alt="pic"/>
                                  <a target="_blank" href={data.photo_session}>More Details</a>
                                </div>
                              </div>
                              </>: <> </>}
                            </div>
                          </div>

                          {data.table_list != null && data.table_list ? (
                            <>
                              <table className="table mt-4">
                                <thead className="bg-blue">
                                  <tr>
                                    <th width="5%" scope="col"><h6>S.No</h6></th>
                                    <th width="13%" scope="col"><h6>Date</h6></th>
                                    <th width="52%" scope="col"><h6>Technical Meeting Name</h6></th>
                                    <th width="15%" scope="col"><h6>Agenda</h6></th>
                                    <th width="15%" scope="col"><h6>Photo of the Meeting</h6></th>
                                  </tr>
                                </thead>
                                <tbody>
                                {data.table_list &&
                                          data.table_list.map((data1, index) => (
                                  <tr>
                                    <th scope="row">{++index}</th>
                                    <td>
                                      <Moment format="DD MMM YY">
                                          {data1.columnone}
                                      </Moment>
                                    </td>
                                    <td>{data1.columntwo}</td>

                                    <td><a target="_blank" href={assetUrl + "/public/women_energy/" + data1.columnthree} className="btn btn-orange-sm">View Agenda</a></td>
                                    <td><a target="_blank" href={data1.columnfour} className="btn btn-orange-sm">View Photos</a></td>
                                  </tr>
                                  ))}
                                </tbody>
                              </table>
                            </>
                            ):(
                              <> </>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WomenEnergy;
