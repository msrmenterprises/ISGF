import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const members = GLOBAL.BASE_URL+"members";

function GeneralBody() {
	const [getMembers, setMembers] = React.useState(null);
  React.useEffect(() => {
    axios.get(members).then((response) => {
    setMembers(response.data);
     });
   },[]);
 
  if (!getMembers) return null;

  return (
    <>
<section className="isgf-breadcum isgf_general_body_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/genral-body/general-body-banner.jpg"
                  })`,
                }}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>General Body (ISGF Members)</h1>
			<p>Home {'>'} ISGF {'>'} ISGF Organizational Structure {'>'} General Body (ISGF Members)</p>
		</div>
	</div>
</section>
<section className="isgf_members_list">
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				<div className="row">
					<div className="col-md-12">
						<div className="heading mb-3">
			                <h2>General Body (ISGF Members)</h2>
			            </div>
					</div>
				</div>
				
				
				<div className="row">
					<div className="col-md-12">
						<p>​​​​​​​​​​​​ISGF members are from the ministries, government institutions, regulators, utilities and private companies from the industry, non-profit organisations, educational and research entities and students from renowned institutions. Membership categories are as follows:</p>
						<div className="">
							
				            <div className="mb-3">
				       
				                <div className="isgf_accordion">
				            		 <div className="accordion" id="accordionExample">

         							{(getMembers) && getMembers.map((data,index)=>(
										  <div className="accordion-item">
										    <h2 className="accordion-header bg-green" id="heading1">
										      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="false" aria-controls={`collapseOne${index}`}>
										       <img src={assetUrl + "/public/Category_img/" + data.image} className="logo-icon"/>{data.name} 
										      </button>
										    </h2>
										    <div id={`collapseOne${index}`} className="accordion-collapse p-3 collapse" aria-labelledby={`headingOne${index}`} data-bs-parent="#accordionExample">
										      <div className="accordion-body">
										        <table className="table accordion_table mt-3">
													  <thead className="bg_blue">
													    <tr>
													      <th scope="col">S. No</th>
													      <th scope="col">Organization</th>
													      <th scope="col"></th>
													    </tr>
													  </thead>
													  <tbody>
         											{(data.list) && data.list.map((data1,index)=>(
													    <tr className="accordion_border_bottom">
													      <th className="s_no">F-{index+1}</th>
													      <td className="title">{data1.title}</td>
													      <td>
													      </td>
													    </tr>
         							 				))}
													      
													  </tbody>
													</table>
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

export default GeneralBody