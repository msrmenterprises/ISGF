import React from 'react';
import axios from "axios";
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import { a, Link } from "react-router-dom";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const isgf_team = GLOBAL.BASE_URL+"isgf-team";
function SecretariatTeam() {
  const [getTeam, setTeam] = React.useState(null);
  React.useEffect(() => {
    axios.get(isgf_team).then((response) => {
    setTeam(response.data);
     });
   },[]);
  
  if (!getTeam) return null;
  return (
    <>
<section className="isgf-breadcum isgf_board_of_governors_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/board-of-governors/board-of-governors.jpg"
                  })`,
                }}>
	<div className="container">
		<div className="isgf-breadcum-box">
					<h1>ISGF Team</h1>
					<p>Home {'>'} ISGF {'>'} ISGF Organizational Structure {'>'} ISGF Team</p>
				</div>
	</div>
</section>
<section className="secretariat-team">
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				
				<div className="row">
					<div className="col-md-12">
						<div className="benefits_membership">
							<div className="heading mb-3">
			                	<h2>ISGF Team</h2>
			            	</div>
				            <div className="mb-3">
				       			
				       			<div className="row g-4">
                   {(getTeam) && getTeam.map((data,index)=>(
				       				<div className="col-sm-6 col-md-4">
				       					<div className="isgf-team">
				       						<div className='image'>
												<img src={assetUrl + "/public/forum_img/" + data.image} alt="pic"/>
											</div>
											<div className='about-team'>
												<div className='name'>{data.title} </div>
												<div className='description'>{data.designation}</div>
											</div>
				       						
											<div className='view' data-bs-toggle="modal" data-bs-target={`#collapseOne${index}`}>View Bio</div>
				       						
				       						<div className="social">
				       						{((data.twitter != null) && (data.twitter != '#'))  ? <>
                                                            <a target="_blank" href={data.twitter}>
													<i className='fa fa-twitter media_icon'></i></a>  </>: <><a   href="" className="disabled">
													<i className='fa fa-twitter media_icon'></i></a> </>}
											 		{((data.linked_in != null) && (data.twitter != '#'))  ? <>
                          <a target="_blank" href={data.linked_in} >
													<i className='fa fa-linkedin media_icon'></i>
												</a>  </>: <> <a   href=""className="disabled"><i className='fa fa-linkedin media_icon'></i>
												</a></>}
				       							
											</div>
											<div className="email-box">
				       							<a href={"mailto:" + data.email} ><i className='fa fa-envelope'></i> {data.email}</a>
				       						</div>
				       						
				       						
				       					</div>
				       					
											<div className="modal fade" id={`collapseOne${index}`}  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
											  <div className="modal-dialog">
											    <div className="modal-content">
											      
											      <div className="modal-body ">
											      	<div className="text-center">
											      		<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											      		<img src={assetUrl + "/public/forum_img/" + data.image} className="img-fluid mt-4"/>
					       								<h3 className="mt-3">{data.title}</h3>
					       								<div>{data.designation}</div>
					       								<div className="icon">

														   {((data.twitter != null) && (data.twitter != '#'))  ? <>
																		<a target="_blank" href={data.twitter} className="fa fa-twitter"></a> </>: <><a href="" className="fa fa-twitter disabled"  ></a> </>}
																	{((data.linked_in != null) && (data.linked_in != '#'))  ? <>
																		<a target="_blank" href={data.linked_in} className="fa fa-linkedin"></a> </>: <> <a   href=""className="fa fa-linkedin disabled"></a></>}
							       						
														</div>
					       								<a href={"mailto:" + data.email} className="btn btn-blue mt-3 mb-3">{data.email}</a>
											      	</div>
				       								{parse(`${data.bio}`)}
											      </div>
											     
											    </div>
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
		    <div className="col-lg-4">
		    	<Sidebar/>
		    </div>
	</div>
    </div>
</section>

    </>
  )
}

export default SecretariatTeam