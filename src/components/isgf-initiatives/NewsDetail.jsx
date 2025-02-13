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
const news = GLOBAL.BASE_URL+"newsDetails/";
let url = window.location.pathname;
let new_data = url.split("/");

function NewsDetail() {
  const slug = useParams();
  const [getValue, setValue] = React.useState(null);

  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [checkbox, setCheckbox] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [getWhitePapersCategory, setWhitePapersCategory] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function saveData() {
    axios({
      method: "post",
      url: GLOBAL.BASE_URL+"white-paper-tech-report-form",
      data: { name, company, email, phone, designation },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        //handle success
        toast.success("🦄 Thanks for visiting!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // document.getElementById("whiteForm").reset();
        // console.log(response);
        navigate("/thankyou");
        // history.push("thankyou");
      })
      .catch(function (response) {
        // toast("Thanks for visiting !");
 
      });
  }
  const onSubmit = (data) => {
    saveData();
  };

 const [getNews, setNews] = React.useState(null);
  const new_url = news+(slug.id);
  React.useEffect(() => {
    axios.get(news + (slug.id)).then((response) => {
      setNews(response.data);
    });
  }, [(slug.id)]);
  if (!getNews) return null;
  //   console.log(getNews.events)
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
            <h1>{getNews.title}</h1>
            <p>
              Home {">"} ISGF {">"} News {">"} {getNews.title} 
            </p>
           
          </div>
        </div>
      </section>
      <section className="grid_modernization">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <div className="heading mb-3">
                <h2>{getNews.title} </h2>
            </div>
              <div className="grid_modernization_topbox mb-3">
                <div className="row g-4">
                  <div className="col-md-3">
                    <img
                      src={assetUrl + "/public/news_img/" + getNews.image}
                      className=""
                      alt="pic"
                    />
                  </div>
                  <div className="col-md-9">
                    {getNews.description != null ? (
                      <>{parse(`${getNews.description}`)}</>
                    ) : (
                      <> </>
                    )}
                    <div className="mt-3 r-more"><span><i className="text-green fa fa-file"></i> Read More:</span> <a href={getNews.read_more} target="_blank">{getNews.read_more}</a></div>
                  </div>
                </div>
               
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

export default NewsDetail;
