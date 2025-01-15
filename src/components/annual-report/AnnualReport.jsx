import React from 'react';
import axios from "axios";
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import parse from 'html-react-parser';
import {useParams } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');

const assetUrl = GLOBAL.assetUrl;
const isgf_credential = GLOBAL.BASE_URL+"annual-report/";
let url = (window.location.pathname);
let new_data = (url.split("/"));
function AnnualReport( ) {
	let new_url = '';
  const slug = useParams();
  const main_slug = slug.id;
  const [getReport, setReport] = React.useState(null);

	new_url = isgf_credential+main_slug;
  React.useEffect(() => {
    axios.get(new_url).then((response) => {
    setReport(response.data);
     });
   },[new_url]);
  if (!getReport) return null;
  return (
    <>
<section className="isgf-breadcum isgf_annual_report_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/annual-report/annual-report-banner.jpg"
                  })`,
                }}>
	<div className="container">
				<div className="isgf-breadcum-box">
					<h1>ISGF Annual Report</h1>
					<p>Home {'>'} ISGF {'>'}  ISGF Annual Report</p>
				</div>
	</div>
</section>
<section className="annual-report">
	<div className="container">
		<div className="row">
			<div className="col-lg-8">

				<div className="row">
					<div className="col-md-12">
						<div className="benefits_membership">
							<div className="heading mb-3">
			                	<h2>ISGF Annual Report</h2>
            	</div>
						</div>
					</div>
				</div>
				<div className="row g-4 justify-content-center">
           {(getReport) && getReport.map((data,index)=>(
					<div className="col-sm-6 col-md-4">
						<div className="report-box">
							<div className='title'>Annual Report {data.starting_year}-{data.ending_year}</div>
							<div className="book-photo">
								<img src={assetUrl + "/public/AnnualReport_img/" + data.image} alt="img-fluid"/>
							</div>
							<div className='link'>
								<a target="_blank" href={assetUrl + "/public/AnnualReport_img/" + data.document} className="btn btn-orange">Click Here</a>
							</div>
						</div>
					</div>
            ))}
				</div>

			</div>
		    <div className="col-lg-4">
		    	<Sidebar/>
		    </div>
	</div>
    </div>
</section>
    </>
  )
}

export default AnnualReport