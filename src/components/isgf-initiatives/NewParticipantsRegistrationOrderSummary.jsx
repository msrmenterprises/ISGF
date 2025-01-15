import React from "react";
import Media from '../reusable/Media';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import Moment from 'react-moment';
import { NavLink, Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import swal from "sweetalert";

const GLOBAL = require('../../commonConstants.js');
const participant = GLOBAL.BASE_URL+"getparticipant/";

const assetUrl = GLOBAL.assetUrl;
const methodology = GLOBAL.BASE_URL+"methodology";
const url = GLOBAL.BASE_URL+"coupon?code=";
const course = GLOBAL.BASE_URL+"purchase-course";

function NewParticipantsRegistrationOrderSummary() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const myArray =  cookies.get('data');


  const u_email = myArray.email ? myArray.email : '';

    const [getUser, setUser] = React.useState(null);
    React.useEffect(() => {
    axios.get(participant+u_email).then((response) => {
    setUser(response.data);
     });
   },[]);

  const [getCourse, setCourse] = React.useState(null);
  const [getCoupon, setCoupon] = React.useState("");
  const [getcoupon, setcoupon] = React.useState("");
  const [getMethodology, setMethodology] = React.useState(null);
  const {register,handleSubmit,formState:{errors}} = useForm();
  const coupon_url = url+getcoupon;

  const [error, setError] = React.useState(null)
    const errorDiv = error
        ? <div className="error">
            {/*<i className="material-icons error-icon">error_outline</i>*/}
            {error}
          </div>
        : '';

  let rand = Math.round(Math.random() * 100000)

      var filter = myArray.selected_course;

      if(getCourse){
        var users= getCourse.filter(item => {
          for (let key in filter) {
            if ( item.id == filter[key])
              return item;
          }
        });
      var sum = users.reduce(function(prev, current) {
        return prev + +current.fee
      }, 0);
      }
   const fetchData = () => {
    fetch(GLOBAL.BASE_URL+"coupon?code="+getcoupon)
      .then(response => {
        return  response.json();
      })
      .then(data => {
        setCoupon(data);
      })
  }

    function percentage(num, per){
        return (num/100)*per;
    }
    var total_amount = sum + percentage(sum,18);
    var percentageamount = 0;
    var coupon_code = '';
     function coupon_percentage(num, percentageamount){
        return (num/100)*percentageamount;
      }
      if(getCoupon != '' || getCoupon.length > 0){
        var validity = new Date(getCoupon[0].validity);
        var todayDate = new Date();
        if(validity >= todayDate) {
          var coupon_code = (getCoupon[0].code);
          var percentageamount = (getCoupon[0].percentageamount);
        }
      }

      var getFinal = total_amount - coupon_percentage(sum,percentageamount) ;
      var getDiscount = coupon_percentage(sum,percentageamount);
      const onSubmit = (data) =>{
          fetchData();
      }

      var encodedStringBtoA = btoa(rand);


  React.useEffect(() => {
    axios.get(methodology).then((response) => {
    setMethodology(response.data);
     });
    axios.get(course).then((response) => {
    setCourse(response.data);
     });
   },[]);
  function saveData(getArray) {

        axios({
            method: "post",
            url: GLOBAL.BASE_URL+"participant",
            data: getArray,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then(function (response) {

            })
            .catch(function (response) {
              setError((response.request.response));

            });

    }


  const handleChange_letter = (e) => {
        var myArray1 = {
                order_id: 'ISGF'+rand,
                user_id: rand,
                pay_amount: getFinal,
                payment: "Pay Later",
                coupon: coupon_code,
            };
        const admin={...myArray,...myArray1};
        cookies.set('data', admin , { path: '/' });
        var getArray =(cookies.get('data'));
        saveData(getArray);
        e.preventDefault();
          setError(null);
      cookies.remove('data', { path: '/' });
        window.open(assetUrl + "/public/banner_img/" + (getMethodology[0].pay_letter));
        navigate('/');

  };
  const handleChange_offline = (e) => {
        var myArray1 = {
                order_id: 'ISGF'+rand,
                user_id: rand,
                pay_amount: getFinal,
                payment: "Pay Offline",
                coupon: coupon_code,
            };
        const admin={...myArray,...myArray1};
        cookies.set('data', admin , { path: '/' });
        var getArray =(cookies.get('data'));
        saveData(getArray);
        e.preventDefault();
          setError(null);
        cookies.remove('data', { path: '/' });
        window.open(assetUrl + "/public/banner_img/" + (getMethodology[0].pay_letter));
        navigate('/');

  };
  const handleChange_online = (e) => {
    var myArray1 = {
                order_id: 'ISGF'+rand,
                user_id: rand,
                pay_amount: getFinal,
                payment: "Pending",
                coupon: coupon_code,
            };
        const admin={...myArray,...myArray1};
        cookies.set('data', admin , { path: '/' });
        var getArray =(cookies.get('data'));
          saveData(getArray);
          e.preventDefault();
          setError(null);
        cookies.remove('data', { path: '/' });
        setTimeout(() => {
          window.open(GLOBAL.BASE_URL+'payment/'+(encodedStringBtoA));
        }, 1000)
        navigate('/');
  };

  if (!getUser) return null;
  if (!getMethodology) return null;
  if (!getCourse) return null;


  return (
    <>
      <section className="isgf-breadcum trainings_participants_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/trainings-participants/trainings-participants-banner.jpg"})`,}}>
        <div className="container">
          <h1>ISGF Trainings Participants Registration</h1>
                <p>
                  Home {'>'} ISGF Initiatives {'>'} ISGF Trainings New Participants
                  Registration
                </p>
        </div>
      </section>
      <section className="space-page trainings-participants ">
        <div className="container-fluid mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="trainings-participants-form custom-shadow mb-4">
                {errorDiv}
                <h5>Order Summary</h5>
                <div className="info-half-div mt-4 mb-3">
                  <table className="table mt-4 table-borderless  table-rersponsive">
                    <tbody>
                      <tr>
                        <th scope="row">Name</th>
                        <td>: {( myArray.name)} </td>
                      </tr>
                      <tr>
                        <th scope="row">Name As Certificate</th>
                        <td>: {( myArray.name_on_certificate)}</td>
                      </tr>
                      <tr>
                        <th scope="row">Email ID</th>
                        <td>: { ( myArray.email)}</td>
                      </tr>
                      <tr>
                        <th scope="row">Mobile Number</th>
                        <td>: { ( myArray.mobile)}</td>
                      </tr>
                      <tr>
                        <th scope="row">Designation</th>
                        <td>: { ( myArray.designation)}</td>
                      </tr>
                      <tr>
                        <th scope="row">Company</th>
                        <td>: { ( myArray.company)}</td>
                      </tr>
                      <tr>
                        <th scope="row">Address</th>
                        <td>: { ( myArray.address)}</td>
                      </tr>
                      <tr>
                        <th scope="row">Country</th>
                        <td>: { ( myArray.country)}</td>
                      </tr>
                      <tr>
                        <th scope="row">State</th>
                        <td>: { ( myArray.state)}</td>
                      </tr>
                      <tr>
                        <th scope="row">GST</th>
                        <td>: { ( myArray.gst)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive">
                  <table className="table mt-4 table-bordered table-rersponsive">
                    <thead>
                      <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Date</th>
                        <th scope="col">Model (Online/Offline)</th>
                        <th scope="col">Program</th>
                        <th scope="col">Fee</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {(users) && users.map((data,index)=>(
                       <tr>
                        <th scope="row">{index+1}</th>
                        <td>{data.date}
                        </td>
                        <td> {data.model} </td>
                        <td>
                          {data.program}
                        </td>

                        <td>{data.fee}* + GST</td>
                        <td className="text-center">
                          {" "}
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                          ></button>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>

                <div className="row">
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-md-5 mt-4">
                    <div className="coupon-div">
                      <h4>Use Coupon Code</h4>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="basic-addon1"
                          onChange={(e) => setcoupon(e.target.value)}
                        />
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fa fa-refresh" aria-hidden="true"></i>
                        </span>
                      </div>
                      <button type="submit" className="btn btn-green upppr">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                  </form>
                  <div className="col-md-7 mt-4">
                    <table className="table table-bordered table-rersponsive">
                      <tbody className="Coupon-table">
                        <tr>
                          <td>Sub-Total:</td>
                          <th scope="row">{sum}</th>
                        </tr>
                        <tr>
                          <td>Discount:</td>
                          <th scope="row">{getDiscount}</th>
                        </tr>
                        <tr>
                          <td>GST:</td>
                          <th scope="row">18%</th>
                        </tr>
                        <tr>
                          <td>Total:</td>
                          <th scope="row">{getFinal}</th>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-right mt-3 mb-3">
                      <a onClick={handleChange_online}  href="javascript:void(0)" className="btn btn-orange upppr">
                        Proceed Online Payment
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-12">
                    <div className="btn_group">
                      <a onClick={handleChange_letter} href={assetUrl + "/public/banner_img/" + (getMethodology[0].pay_letter)}  className="btn btn-orange upppr" download>
                        PAY Later
                      </a>
                      <a onClick={handleChange_offline}  href={assetUrl + "/public/banner_img/" + (getMethodology[0].pay_letter)} className="btn btn-green upppr" download>
                        Pay Offline
                      </a>
                      <NavLink onClick={() => window.scrollTo(0, 0)} exact   to="/proformaInVoice" className="btn btn-blue upppr" >
                        Download proforma Invoice/Quotation
                      </NavLink>
                    </div>
                  </div>
                </div>

                {(getMethodology) && getMethodology.map((data,index)=>(
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-half-div mt-4 mb-3">
                      <p>
                        If you wish to pay through RTGS / NEFT / Fund Transfer
                        Methods, Bank Details for RTGS / NEFT / Fund Transfer of
                        ISGF are mentioned below:
                      </p>

                      <p className="mb-1">
                        {" "}
                        <span className="blue-p">
                          <b> Account Name:</b>
                        </span>
                        {data.account_name}
                      </p>
                      <p className="mb-1">
                        <span className="blue-p">
                          <b>Address: </b>
                        </span>{" "}
                        {data.address}
                      </p>
                      <p className="mb-1">
                        <span className="blue-p">
                          <b>Bank Name: </b>
                        </span>{" "}
                        {data.bank_name}
                      </p>
                      <p className="mb-1">
                        <span className="blue-p">
                          <b>RTGS/NEFT/IFSC Code: </b>
                        </span>{" "}
                        {data.rtgs}
                      </p>
                      <p className="mb-1">
                        <span className="blue-p">
                          <b>Bank Address: </b>
                        </span>{" "}
                        {data.bank_address}
                      </p>

                      <p>
                        <span className="blue-p">
                          <b> Pease Note:</b>
                        </span>{" "}
                         {parse(`${data.please_note}`)}
                      </p>
                    </div>
                  </div>
                </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewParticipantsRegistrationOrderSummary;
