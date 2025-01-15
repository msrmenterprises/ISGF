import React from "react";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Moment from 'react-moment';
import { useParams } from "react-router-dom";
import ReactToPrint from 'react-to-print';
const GLOBAL = require('../../commonConstants.js');
const participants = GLOBAL.BASE_URL+"getparticipantOrderId/";
const course = GLOBAL.BASE_URL+"purchase-course";
const url1 = GLOBAL.BASE_URL+"contactUS";

function ProformaInVoice() {
  const cookies = new Cookies();
  const myArray =  cookies.get('data');

  const navigate = useNavigate();
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
    function sum_value(num, per){
        var total_amount = sum + percentage(num,18);
        return total_amount;
    }
    React.useEffect(() => {
    axios.get(course).then((response) => {
    setCourse(response.data);
     });
    axios.get(url1).then((response) => {
    setContactData(response.data);
     });
   },[]);
  const pdfExportComponent = useRef(null);
  const  handleExportWithComponent  = (event) => {
    pdfExportComponent.current.save();
}
  if (!myArray) return navigate("/");
  if (!getContactData) return null;

  return (
    <>
   <PDFExport ref={pdfExportComponent}  paperSize="A4">
   <ReactToPrint>
      <section className="proforma-in-voice">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/isgf_Logo.png`}
                alt=""
                className="isgf-logo"
              />
              <div className="address">
                <p>
                 {getContactData[0].india_smart_grid_forum} <br />
                  T: {getContactData[0].phone} <br />
                  E-mail:{" "}
                  <a href="mailto:contactus@indiasmartgrid.org">
                    {" "}
                    {getContactData[0].email}
                  </a>{" "}
                  <br />
                  Website:{" "}
                  <a href={getContactData[0].website}>
                    {getContactData[0].website}
                  </a>{" "}
                </p>
              </div>
              <h3 className="mb-4">PROFORMA INVOICE (QUOTATION ONLY)</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">


              <p>
                <b>Name:</b> {myArray.name ? myArray.name : ''}
              </p>
              <p>
                <b>Company:</b> {myArray.company ? myArray.company : ''}
              </p>
              <p>
                <b>Address:</b> {myArray.address ? myArray.address : ''}
              </p>
              <p>
                <b>State:</b> {myArray.state ? myArray.state : ''}
              </p>
              <p>
                <b>Country:</b> {myArray.country ? myArray.country : ''}
              </p>
              <p>
                <b>GST:</b> {myArray.gst ? myArray.gst : ''}
              </p>
              <p>
                <b>Date:</b> <Moment format="DD MMMM YYYY H:mm">
                            </Moment>
              </p>
            </div>
          </div>
          <p>
            We are pleased to quote the Program Fee for following Online
            Training Programs:
          </p>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Date</th>
                <th scope="col">Model(Online/Offline)</th>
                <th scope="col">Program</th>
                <th scope="col">Fee</th>
                <th scope="col">GST</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {(users) && users.map((data,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{data.date}
                </td>
                <td>{data.model}</td>
                <td>{data.program} </td>
                <td>{data.fee}</td>
                <td>18%</td>
                <td>{ sum_value((data.fee),18) }</td>

              </tr>
              ))}

            </tbody>
          </table>
          <p>**** This is an Autogenerated Proforma Invoice so signature is not required</p>
        </div>

      </section>
      </ReactToPrint>

      </PDFExport>
      <div className="text-center mt-2 mb-5">
        <button className="btn btn-secondary print-btn"  primary={true} onClick={handleExportWithComponent}>Download</button>
        </div>
    </>
  );
}

export default ProformaInVoice;
