import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"members";
const assetUrl = GLOBAL.assetUrl;
function MembersList() {
	const [getMember, setMember] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setMember(response.data);
     });

   },[]);
  if (!getMember) return null;
  // console.log(getMember);
  return (
    <>
<section className="isgf-breadcum isgf_members_list_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/members-list/members-list-bread.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>ISGF Members List</h1>
			<p>Home {'>'} Membership {'>'}  ISGF Members List</p>
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
			                <h2>ISGF Members</h2>
			            </div>
					</div>
				</div>
				
				
				<div className="row">
					<div className="col-md-12">
						<div className="">
							
				            <div className="mb-3">
				       
				                <div className="isgf_accordion">
				            		 <div className="accordion" id="accordionExample">

                 			{(getMember) && getMember.map((data,index)=>(
										  <div className="accordion-item">
										    <h2 className="accordion-header bg-green" id={`#heading${index}`}>
										      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls={`collapseOne${index}`}>
										       <img alt="pic" src={assetUrl + "/public/Category_img/" + data.image} className="logo-icon"/> {data.name}  
										      </button>
										    </h2>
										    <div id={`collapseOne${index}`}  className="accordion-collapse collapse" aria-expanded="false" aria-labelledby={`#heading${index}`} data-bs-parent="#accordionExample">
										      <div className="accordion-body p-3">
										        <table className="table accordion_table m-0">
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
													      <th className="s_no">{index+1}</th>
													      <td className="title">{data1.title}</td>
													      <td className="title"><img alt="pic" src={assetUrl + "/public/forum_img/" + data1.image} /></td>
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

export default MembersList