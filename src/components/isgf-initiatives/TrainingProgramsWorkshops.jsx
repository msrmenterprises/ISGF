import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import parse from "html-react-parser";
const GLOBAL = require('../../commonConstants.js');
const url =
  GLOBAL.BASE_URL+"training-programs-workshops";
const assetUrl = GLOBAL.assetUrl;

function TrainingProgramsWorkshops() {
  const [getTraining, setTraining] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setTraining(response.data);
    });
  }, []);
  if (!getTraining) return null;
  return (
    <>
      <section
        className="isgf-breadcum isgf_traning_pro_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/training-programs-workshops/traning-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>Training Programs and Workshops (Completed)</h1>
            <p>
              Home {">"} ISGF Initiatives {">"} Trainings & Capacity Building
              {">"} Training Programs and Workshops (Completed)
            </p>
          </div>
        </div>
      </section>
      <section className="competitions traning-pro">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="heading mb-3">
                <h2>Training Programs and Workshops (Completed)</h2>
              </div>
              <p>
                ​​​​​​​​​​​​ISGF has been working with stakeholders around the
                world to create effective knowledge sharing platforms and
                capacity building programs for about a decade. Key objective of
                ISGF initiatives is to create skilled workforce in the power
                sector for undertaking electric grid modernization to support
                the energy transition. ISGF has conducted various training
                programs, workshops, seminars, roundtables, webinars, master
                classNamees, overseas study tours, conferences and exhibitions.
                ISGF has also worked on demonstration projects and conducted
                research studies to provide knowledge on new technologies.
                Through these initiatives, ISGF has successfully imparted
                knowledge to over 45000 professionals in last 10 years. These
                programs upskilled the existing workforce on emerging
                technologies to engage them in energy transition and utility
                transformation. The various domains in which ISGF has regularly
                imparted training programs are Smart Grid, Cyber Security for
                Power Systems, Advanced Metering Infrastructure, E-Mobility and
                Charging Infrastructure, Artificial Intelligence and Robotics,
                Blockchain etc. Since May 2020 After COVID-19 pandemic ISGF has
                conducted Online Training Programs in Live Online Version and
                Recorded Online Version.
              </p>

              <div className="isgf_accordion">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {getTraining &&
                    getTraining.map((data, index) => (
                      <div className="accordion-item">
                        <h2
                          className="accordion-header bg-green"
                          id={`#collapseOne${index}`}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapseOne${index}`}
                            aria-expanded="false"
                            aria-controls={`collapseOne${index}`}
                          >
                            <img
                              alt="pic"
                              className="acc-icon"
                              src={assetUrl + "/public/forum_img/" + data.icon}
                            />
                            {data.heading}
                          </button>
                        </h2>
                        <div
                          id={`collapseOne${index}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`collapseOne${index}`}
                          data-bs-parent="#accordionFlushExample"
                        >

                          <div className="accordion-body">


                            {parse(`${data.description}`)}


                            {/* <div className="accordion-inner-blue mt-3">
                              <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample1"
                              >
                                {data.training_programs &&
                                  data.training_programs.map((data1, index) => (

                                    <div className="accordion-item">
                                      <h2
                                        className="accordion-header"
                                        id={`#collapseTwo${index}`}
                                      >
                                        <button
                                          className="accordion-button collapsed"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target={`#collapseTwo${index}`}
                                          aria-expanded="false"
                                          aria-controls={`collapseTwo${index}`}
                                        >
                                          {data1.heading}
                                        </button>
                                      </h2>
                                      <div
                                        id={`collapseTwo${index}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`collapseTwo${index}`}
                                        data-bs-parent="#accordionFlushExample1"
                                      >
                                        <div className="accordion-body">



                                          {parse(`${data1.description}`)}
                                          <div className="competitions-item my-5">
                                            <div className="row g-4">

                                            {((data1.platform != null))  ? <> <div className="col-md-4">
                                                <div className="item-box">
                                                  <img
                                                    alt="pic"
                                                    src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-1.png`}
                                                    className="mb-3"
                                                  />
                                                  <h4 className="mb-2">
                                                    {data1.platform}
                                                  </h4>
                                                  <p>
                                                    Cisco WebEx Meeting Platform
                                                  </p>
                                                </div>
                                              </div></>: <> </>}

                              {((data1.participants != null))  ? <> <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-2.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {data1.participants}
                                    </h4>
                                    <p>Number of Participants</p>
                                  </div>
                                </div>
                                </>: <> </>}


                                {((data1.live_training != null))  ? <><div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-3.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {data1.live_training}
                                    </h4>
                                    <p>
                                      Live Training Participants
                                    </p>
                                  </div>
                                </div>
                                </>: <> </>}

                              {((data1.record_training != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-4.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {data1.record_training}
                                    </h4>
                                    <p>
                                      Recorded Training
                                      Participants
                                    </p>
                                  </div>
                                </div>
                                </>: <> </>}

                                {((data1.hours != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-5.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {data1.hours}
                                    </h4>
                                    <p>Number of Hours</p>
                                  </div>
                                </div>
                                </>: <> </>}

                                {((data1.program_link != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-6.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      Program Agenda/Manual
                                    </h4>
                                    <a
                                      target="_blank"
                                      href={data1.program_link}
                                      className="link-text"
                                    >
                                      More Details
                                      <i className="fa fa-angle-double-right"></i>
                                    </a>
                                  </div>
                                </div>
                                </>: <> </>}


                                {((data1.program_brochure != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-7.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      Program Brochure
                                    </h4>
                                    <a
                                      href={
                                        data1.program_brochure
                                      }
                                      className="link-text"
                                    >
                                      More Details
                                      <i className="fa fa-angle-double-right"></i>
                                    </a>
                                  </div>
                                </div>
                                </>: <> </>}

                              {((data1.participant_org != null))  ? <>
                                              <div className="col-md-4">
                                                <div className="item-box">
                                                  <img
                                                    src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-8.png`}
                                                    className="mb-3"
                                                  />
                                                  <h4 className="mb-2">
                                                    Participating Organisations
                                                  </h4>
                                                  <p>{data1.participant_org}</p>
                                                </div>
                                              </div></>: <> </>}

                                              {((data1.location != null))  ? <>
                                              <div className="col-md-4">
                                                <div className="item-box">
                                                  <img
                                                    src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-8.png`}
                                                    className="mb-3"
                                                  />
                                                  <h4 className="mb-2">
                                                    Location
                                                  </h4>
                                                  <p>{data1.location}</p>
                                                </div>
                                              </div></>: <> </>}


                                            </div>
                                          </div>



                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div> */}



                        <div className="accordion" id={`accordionExample400${index}`}>
                        {data.training_programs &&
                                  data.training_programs.map((data1, index1) => (
                                <div className="accordion-item">
                                    <h2
                                       className="accordion-header"
                                       id={`headingOne401${index}${index1}`}>
                                    <button
                                        className="accordion-button inner-blue-acco collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapseOne401${index}${index1}`}
                                        aria-expanded="true"
                                        aria-controls={`collapseOne401${index}${index1}`} >
                                        {data1.heading}

                                    </button>

                                    </h2>


                                    <div
                                       id={`collapseOne401${index}${index1}`}
                                       className="accordion-collapse collapse"
                                       aria-labelledby={`headingOne401${index}${index1}`}
                                       data-bs-parent={`#accordionExample400${index}`}>

                                        <div className="accordion-body">
                                        {parse(`${data1.description}`)}
                                          <div className="competitions-item my-5">
                                            <div className="row g-4">

                                            {((data1.platform != null))  ? <> <div className="col-md-4">
                                                <div className="item-box">
                                                  <img
                                                    alt="pic"
                                                    src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-1.png`}
                                                    className="mb-3"
                                                  />
                                                  <h4 className="mb-2">
                                                    {data1.platform}
                                                  </h4>
                                                  <p>
                                                    Cisco WebEx Meeting Platform
                                                  </p>
                                                </div>
                                              </div></>: <> </>}

                              {((data1.participants != null))  ? <> <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-2.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {data1.participants}
                                    </h4>
                                    <p>Number of Participants</p>
                                  </div>
                                </div>
                                </>: <> </>}


                                {((data1.live_training != null))  ? <><div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-3.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {data1.live_training}
                                    </h4>
                                    <p>
                                      Live Training Participants
                                    </p>
                                  </div>
                                </div>
                                </>: <> </>}

                              {((data1.record_training != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-4.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {data1.record_training}
                                    </h4>
                                    <p>
                                      Recorded Training
                                      Participants
                                    </p>
                                  </div>
                                </div>
                                </>: <> </>}

                                {((data1.hours != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-5.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {data1.hours}
                                    </h4>
                                    <p>Number of Hours</p>
                                  </div>
                                </div>
                                </>: <> </>}

                                {((data1.program_link != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-6.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      Program Agenda/Manual
                                    </h4>
                                    <a
                                      target="_blank"
                                      href={data1.program_link}
                                      className="link-text"
                                    >
                                      More Details
                                      <i className="fa fa-angle-double-right"></i>
                                    </a>
                                  </div>
                                </div>
                                </>: <> </>}


                                {((data1.program_brochure != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-7.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      Program Brochure
                                    </h4>
                                    <a
                                      href={
                                        data1.program_brochure
                                      }
                                      className="link-text"
                                    >
                                      More Details
                                      <i className="fa fa-angle-double-right"></i>
                                    </a>
                                  </div>
                                </div>
                                </>: <> </>}

                              {((data1.participant_org != null))  ? <>
                                              <div className="col-md-4">
                                                <div className="item-box">
                                                  <img
                                                    src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-8.png`}
                                                    className="mb-3"
                                                  />
                                                  <h4 className="mb-2">
                                                    Participating Organisations
                                                  </h4>
                                                  <p>{data1.participant_org}</p>
                                                </div>
                                              </div></>: <> </>}

                                              {((data1.location != null))  ? <>
                                              <div className="col-md-4">
                                                <div className="item-box">
                                                  <img
                                                    src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-8.png`}
                                                    className="mb-3"
                                                  />
                                                  <h4 className="mb-2">
                                                    Location
                                                  </h4>
                                                  <p>{data1.location}</p>
                                                </div>
                                              </div></>: <> </>}


                                            </div>
                                          </div>




                                        </div>
                                    </div>


                                </div>
                                )
)}


                        </div>

                          </div>



                        </div>
                      </div>
                    ))}
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

export default TrainingProgramsWorkshops;
