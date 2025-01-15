import React from "react";
import Media from '../reusable/Media';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { jsPDF } from "jspdf";
import Moment from 'react-moment';
const GLOBAL = require('../../commonConstants.js');
const url1 = GLOBAL.BASE_URL+"contactUS";

const course = GLOBAL.BASE_URL+"course";

const doc = new jsPDF();
function NewParticipantsRegistrationProFormaInvoice() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const myArray =  cookies.get('data');
  const [getCourse, setCourse] = React.useState(null);
  const [getContactData, setContactData] = React.useState(null);

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


      function percentage(num, per){
        return (num/100)*per;
    }
    var total_amount = sum + percentage(sum,18);

     function coupon_percentage(num, percentageamount){
        return (num/100)*percentageamount;
      }
      
        var percentageamount = 0;
        
      var getFinal = coupon_percentage(sum,percentageamount) + total_amount;
      var getDiscount = coupon_percentage(sum,percentageamount);
  React.useEffect(() => {
    axios.get(course).then((response) => {
    setCourse(response.data);
     });
    axios.get(url1).then((response) => {
    setContactData(response.data);
     });
   },[]);
  // console.log(users);
 
 
      const printFunction = (e) => {
        window.print(); 
        };
  if (!myArray) return navigate("/");
  if (!getContactData) return null;
 // console.log(getContactData);
  return (
    <>
      <section id="content" className="isgf-breadcum trainings_participants_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/trainings-participants/trainings-participants-banner.jpg"})`,}}>
        <div className="container">
         <div className="isgf-breadcum-box">
                <h1>ISGF Trainings Participants Registration</h1>
                <p>
                  Home {'>'} ISGF Initiatives {'>'} ISGF Trainings New Participants
                  Registration
                </p>
              </div>
        </div>
      </section>
      <section id="elementH" className="space-page trainings-participants ">
        <div className="container-fluid mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="trainings-participants-form custom-shadow mb-4">
                <h5>Pro-forma invoice</h5>
                <div className="info-half-div mt-4 mb-3">
                  <h4 className="blue-p">India Smart Grid Forum</h4>
                  <div className="half-flex-between">
                    <ul className="info-ul">
                      <li>
                        <span>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </span>
                        {getContactData[0].india_smart_grid_forum}
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        {getContactData[0].phone}
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                        {getContactData[0].email}
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-globe" aria-hidden="true"></i>
                        </span>
                        {getContactData[0].website}
                      </li>
                    </ul>
                    
                    <img className="side-logo-img" src={`${process.env.PUBLIC_URL}/images/isgf_Logo.png`}/>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="full-btn-radius mt-4 pb-3">
                      <a href="" className="btn btn-blue btn-size upppr">
                        Thank you for your Registration & Order!
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                     <div className="info-half-div mt-4 mb-3">
                  <table className="table mt-4 table-borderless  table-rersponsive">
                    <tbody>
                      <tr>
                        <th scope="row">Name</th>
                        <td>: {myArray.name ? myArray.name : ''} </td>
                      </tr>
                      <tr>
                        <th scope="row">Name As Certificate</th>
                        <td>: {myArray.name_on_certificate ? myArray.name_on_certificate : ''}</td>
                      </tr>
                      <tr>
                        <th scope="row">Email ID</th>
                        <td>: {myArray.email ? myArray.email : ''}</td>
                      </tr>
                      <tr>
                        <th scope="row">Mobile Number</th>
                        <td>: {myArray.mobile ? myArray.mobile : ''}</td>
                      </tr>
                      <tr>
                        <th scope="row">Designation</th>
                        <td>: {myArray.designation ? myArray.designation : ''}</td>
                      </tr>
                      <tr>
                        <th scope="row">Company</th>
                        <td>: {myArray.company ? myArray.company : ''}</td>
                      </tr>
                      <tr>
                        <th scope="row">Address</th>
                        <td>: {myArray.address ? myArray.address : ''}</td>
                      </tr>
                      <tr>
                        <th scope="row">Country</th>
                        <td>: {myArray.country ? myArray.country : ''}</td>
                      </tr>
                      <tr>
                        <th scope="row">State</th>
                        <td>: {myArray.state ? myArray.state : ''}</td>
                      </tr>
                      <tr>
                        <th scope="row">GST</th>
                        <td>: {myArray.gst ? myArray.gst : ''}</td>
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
                        <td><Moment format="DD MMMM YYYY">
                                {data.startdate} 
                            </Moment> 
                                  -
                            <Moment format="DD MMMM YYYY">
                                {data.enddate} 
                            </Moment>
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
                      <div className="offset-md-5 col-md-7 mt-4">
                        <table className="table table-bordered table-rersponsive">
                          <tbody className="Coupon-table">
                            <tr>
                              <td>Sub-Total:</td>
                              <th scope="row">{sum}</th>
                            </tr>
                            <tr>
                              <td>Discount:</td>
                              <th scope="row">0</th>
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
                      </div>
                      <div className="text-center mt-3 mb-3">
                        <a onClick={printFunction}
                          href="javascript:void(0)"
                          className="btn btn-orange btn-size"
                        >
                          
                          <img src={`${process.env.PUBLIC_URL}/images/new-participants-registration-pro-forma-invoice/icon-d.png`}/>
                          download proforma Invoice
                        </a>
                      </div>
                         
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewParticipantsRegistrationProFormaInvoice;
