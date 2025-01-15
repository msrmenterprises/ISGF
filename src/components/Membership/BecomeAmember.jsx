import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"memberCategory";
const becomeMember = GLOBAL.BASE_URL+"becomeMember";
const joinIsgf = GLOBAL.BASE_URL+"joinIsgf";
const assetUrl = GLOBAL.assetUrl;
function BecomeAmember() {
	const [getMemberList, setMemberList] = React.useState(null);
	const [getBecomeMember, setBecomeMember] = React.useState(null);
	const [getJoinIsgf, setJoinIsgf] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setMemberList(response.data);
     });
    axios.get(joinIsgf).then((response) => {
    setJoinIsgf(response.data);
     });
    axios.get(becomeMember).then((response) => {
    setBecomeMember(response.data);
     });

   },[]);
  if (!getMemberList) return null;
  if (!getJoinIsgf) return null;
 
  return (
    <>
<section className="isgf-breadcum isgf_membership_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/membership/membership-bg.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>ISGF Membership</h1>
			<p>Home {'>'} Membership {'>'}  ISGF Membership</p>
		</div>
	</div>
</section>
<section className="isgf_become_a_member">
	{(getJoinIsgf) && getJoinIsgf.map((dataa,index)=>(
	<div className="container">
		<div className="row">
			<div className="col-lg-8 ">
				<div className="row">
					<div className="col-md-12">
						<div className="heading mb-3">
			                <h2>General Body (ISGF Members)</h2>
			            </div>
              {parse(`${dataa.description}`)}
					</div>
				</div>
				<div className="row mb-4">
					<div className="col-md-12">
						<div className="membership_categories" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/become-a-member/green-bg.jpg"})`}}>
							<div className="heading mb-3">
			                	<h2>General Body (ISGF Members)</h2>
			            	</div>
			            	{/* <div className="row">
								<div className="col-md-12">
									<div className="membership_categories_item">
               			{(getMemberList) && getMemberList.map((data,index)=>(
									<div>	{((index < 4 ) && (data.general_body==1))  ? <>
										<div className="item-1">
											<img src={`${process.env.PUBLIC_URL}/images/become-a-member/government-institutions-members.png`}/>
											<p>{data.title}</p>
										</div>
											 </>: <> </>}</div>
										))}
										 
									</div>
								</div>
							</div> */}
				            
									<div className="membership_categories_item">
										{(getMemberList) && getMemberList.map((data,index)=>(
									<div>	{((index >= 4 ) && (data.general_body==1))  ? <>
										<div className="item-1">
											<img alt="pic" src={assetUrl + "/public/Category_img/" + data.image}/>
											<p>{data.title}</p>
										</div>
											 </>: <> </>}</div>
										))}

									</div>
								
							
						</div>

					</div>
				</div>
				
				<div className="row mb-4">
					<div className="col-md-12">
						<div className="members_gray_2020">
							<div className="heading mb-3">
			                	<h2>ISGF Members In Year 2020 - 21</h2>
			            	</div>
			            	<div className="row">
			            		<div className="col-md-8">
			            			<p>For full list of current ISGF Members</p>
			            		</div>
			            		<div className="col-md-4">
			            			<a target="_blank" href={dataa.member_list} className="btn btn-green"><img src={`${process.env.PUBLIC_URL}/images/become-a-member/icon.png`} className="img-fluid"/> Click Here</a>
			            		</div>
			            	</div>
			            </div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="benefits_membership">
							<div className="heading mb-3">
			                	<h2>ISGF Members In Year 2020 - 21</h2>
			            	</div>
				            <div className="mb-3">
				       
				                <div className="isgf_accordion">
				            		 <div className="accordion" id="accordionExample">

                 			{(getBecomeMember) && getBecomeMember.map((data,index)=>(
										  <div className="accordion-item">
										    <h2 className="accordion-header bg-green" id="heading1">
										      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseO${index}`} aria-expanded="false" aria-controls={`collapseO${index}`}>
										      {data.heading}
										      </button>
										    </h2>

										    <div id={`collapseO${index}`} className={`accordion-collapse collapse`} aria-expanded="false" aria-labelledby={`headingOne${index}`} data-bs-parent="#accordionExample">
										      <div className="accordion-body p-3">
										       <table className="table table-bordered m-0">
												  
												  <tbody>
                 					{(data.important_links) && data.important_links.map((data1,index)=>(
												    <tr>
												      <td className="tb_green">{data1.columnone}</td>
												      <td className="text_box">
												      	<p><i className="fa fa-check"></i> {data1.columntwo}</p>
												      	 
												      </td>
												    </tr>
      												))}
												     
												  </tbody>
												</table>
										      </div>
										    </div>
										  </div>
											))}
										  
  
										 <div className="row mt-4">
											<div className="col-md-12">
												<div className="heading mb-3">
									                <h2>Member Eligibility And Fees</h2>
									            </div>
									           
											</div>
										</div>
										<div className="member_eligibility">
											<table className="table table-bordered">
											  <thead>
											    <tr>
											      <th scope="col">S.No.​</th>
											      <th scope="col">Membership Categories</th>
											      <th scope="col">Member Details</th>
											      <th scope="col">​​Fee details</th>
											    </tr>
											  </thead>
											  <tbody>
                   				{(dataa.important_links) && dataa.important_links.map((datan,index)=>(
											    <tr>
											      <th scope="row">{index+1}</th>
											      <td>{datan.columnone}</td>
											      <td>{datan.columntwo}</td>
											      <td>{datan.columnthree}</td>
											    </tr>
                  					))}
											  </tbody>
											</table>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="row how_join mt-3">
					<div className="col-md-12">
						<div className="heading mb-3">
			                <h2>How To Join ISGF?</h2>
			            </div>
                  {parse(`${dataa.join_isgf}`)}
									<div className="button">
			            	<a href={assetUrl + "/public/attachment/" + dataa.attachment} className="download_pdf_green"><i className="fa fa-download"></i>Download Membership Application From</a> <a href={assetUrl + "/public/attachment/" + dataa.attachment1} className="download_pdf_orange"><i className="fa fa-download"></i> Download Student Membership From</a>
			            </div>
					</div>
				</div>
				<div className="row mt-5 membership_inquiry">
					<div className="col-md-12">
						<div className="heading">
			                <h2>Membership Inquiry</h2>
			            </div>
            <div className='mt-3'>
				{parse(`${dataa.enquery}`)}
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

export default BecomeAmember