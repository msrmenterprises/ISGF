import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"contribution";
const url1 = GLOBAL.BASE_URL+"contributionReceived";
const url2 = GLOBAL.BASE_URL+"contributionData";
const assetUrl = GLOBAL.assetUrl;;

function Contribution() {
	const [getContribution, setContribution] = React.useState(null);
	const [getContributionReceived, setContributionReceived] = React.useState(null);
	const [getContributionData, setContributionData] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setContribution(response.data);
     });
    axios.get(url1).then((response) => {
    setContributionReceived(response.data);
     });
    axios.get(url2).then((response) => {
    setContributionData(response.data);
     });

   },[]);
  if (!getContribution) return null;
  if (!getContributionReceived) return null;
  if (!getContributionData) return null;
  return (
    <>
<section className="isgf-breadcum isgf_contributions_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/contributions/conrti-bg.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
					<h1>contributions</h1>
					<p>Home {'>'} Contributions</p>
				</div>
	</div>
</section>
<section className="isgf_contributions">
	{(getContributionData) && getContributionData.map((data3,index)=>(
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				<div className="row">
					<div className="col-md-12">
						<div className="heading mb-3">
			                <h2>Contributions</h2>
			            </div>
			            {parse(`${data3.description}`)}</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="make_graybox_contributions">
							<div className="heading mb-3">
				                <h2>Contributions</h2>
							</div>
				            <img src={assetUrl + "/public/Contribution_img/" + data3.image} className="img-fluid pt-3"/>
				            <a href={data3.link} className="btn btn-green mt-3 mb-3"> Click Here</a>
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col-md-12">
						<div className="fcra_status_contributions">
							<div className="heading mb-3">
				                <h2>FCRA Status</h2>
							</div>
				            <p>ISGF has been granted FCRA approval by Government of India.</p>
				            <div className="isgf_bluebox mb-3">
				                <h4 className="heading m-0 isgf_blue_heading">Status Of Contribution Received</h4>

				                <div className="isgf_about_point isgf_accordion pt-3">
				            		 <div className="accordion" id="accordionExample">

                   			{(getContributionReceived) && getContributionReceived.map((data,index)=>(
										  <div className="accordion-item">
										    <h2 className="accordion-header bg-green" id="heading1">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="false" aria-controls={`collapseOne${index}`}>
										       {data.title}  
										      </button>
										    </h2>
										    <div id={`collapseOne${index}`} className={`accordion-collapse collapse`} aria-expanded="false" aria-labelledby="heading1" data-bs-parent="#accordionExample">
										      <div className="accordion-body">
                   					{(data.get_contribution_received) && data.get_contribution_received.map((data1,index)=>(
										        <div className="isgf_accordion_inneritem bg-white">
										        	<div className="left"><h5>{data1.title} </h5></div>
										        	<div className="right"><a target="_blank" download href={assetUrl + "/public/forum_img/" + data1.report} className="btn btn-orange">Click Here</a></div>
										        </div>
                  					))}
										        
										      </div>
										    </div>
										  </div>
                  		))}
										  

									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4 g-0">
					<div className="col-md-8">
						<div className="contributions_bal_sht bg-blue">
							<div className="heading mb-3">
				                <h2>Balance Sheet</h2>
							</div>
				           
				            <div className="isgf_bluebox mb-3">
				               
				                <div className="isgf_about_point isgf_accordion">
				            		 <div className="accordion" id="balance_sheet">

                   			{(getContribution) && getContribution.map((data,index)=>(
										  <div className="accordion-item">
										    <h2 className="accordion-header" id="heading_b1">
										      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseTwo${index}`} aria-expanded="false" aria-controls={`collapseTwo${index}`}>
										        {data.title}
										      </button>
										    </h2>
										    <div id={`collapseTwo${index}`} className={`accordion-collapse collapse`} aria-expanded="false" aria-labelledby={`headingTwo${index}`} data-bs-parent="#balance_sheet">
										      <div className="accordion-body">
                   					{(data.get_balance_sheet) && data.get_balance_sheet.map((data1,index)=>(
										        <div className="isgf_accordion_inneritem bg-white">
										        	<div className="left"><h5>{data1.title}</h5></div>
										        	<div className="right"><a target="_blank" download href={assetUrl + "/public/forum_img/" + data1.report}  className="btn btn-orange">View/Download</a></div>
										        </div>
                  					))}
										      </div>
										    </div>
										  </div>
            					))}
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="contributions_auditors" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/contributions/green-bg.jpg"})`}}>
							<div className="heading mb-3 text-start">
					            <h2>For Auditors Certificate</h2>
							</div>
							<div className="contributions_auditors_box">
					          <h3 className="mt-3">{data3.year}</h3> 
					          <img src={`${process.env.PUBLIC_URL}/images/contributions/auditors-1.png`} className="img-fluid"/>  <br/>
					          <a target="_blank" href={data3.certificate} className="btn btn-orange"><i className="fa fa-download"></i> Download PDF</a>
			        </div>
						</div>
					</div>
				</div>
			</div>
		    <div className="col-lg-4">
		    	<Sidebar/>
		    </div>
	</div>
    </div>
  ))}
</section>
    </>
  )
}

export default Contribution