import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const awards = GLOBAL.BASE_URL+"Awards";
const jury = GLOBAL.BASE_URL+"isJuryMember";

function Awards() {
	const [getAwards, setAwards] = React.useState(null);
	const [getIsJury, setIsJury] = React.useState(null);
  React.useEffect(() => {
    axios.get(awards).then((response) => {
    setAwards(response.data);
     });
    axios.get(jury).then((response) => {
    setIsJury(response.data);
     });
   },[]);
  if (!getAwards) return null;
  if (!getIsJury) return null;
  return (
    <>
<section className="isgf-breadcum isgf_awards_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/awards/awards-banner.jpg"
                  })`,
                }}>
	<div className="container">
		<div className="isgf-breadcum-box">
					<h1>ISGF Innovation Awards</h1>
					<p>Home  {'>'} ISGF Initiatives  {'>'}  ISGF Innovation Awards</p>
				</div>
	</div>
</section>
<section className="awards">
 {(getAwards) && getAwards.map((data,index)=>(
	<div className="container">
		<div className="row">
			<div className="col-lg-8 ">
				<div className="row">
					<div className="col-md-12">
						<div className="heading mb-3">
			                <h2>ISGF Innovation Awards</h2>
			            </div>
			        </div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<img src={assetUrl + "/public/Award_img/" + data.image} className="img-fluid"/>
						<h3 className="mt-5 h-3">Overview of ISGF Innovation Awards</h3>
                    {parse(`${data.overview}`)}
						<h3 className="mt-5 h-3">Upcoming Edition</h3>
						                    {parse(`${data.upcoming_edition}`)}
									<div className="awards-gray-box mt-5">
				            <h3 className="mb-3 h-3">Refer Important Links Below for Further Details</h3>
				            <div className="row">
 											{(data.important_links) && data.important_links.map((data1,index)=>(
				            	<div className="col-md-6 mb-2">
				            		<div className="green-box">
 												<a  target="_blank" href={data1.link} >
				            			<p>{data1.title} </p>
				            		</a>
				            		</div>
				            	</div>
                  			))}
				            	 
				            </div>
				        </div>
				        <div className="winner mt-5">
				        	<h3>Winners of Previous Editions of ISGF Innovation Awards</h3>
				        	<div className="row">
				        		<div className="col-md-8">
				        			<table className="table table-bordered" align="center">
										  <thead align="center">
										    <tr>
										      <th scope="col">Years</th>
										      <th scope="col">Link to view past winners</th>
										      
										    </tr>
										  </thead>
										  <tbody align="center">
 											{(data.awards) && data.awards.map((data2,index)=>(
										    <tr>
										      <td>{data2.year}</td>
										      <td align="center"><a target="_blank" href={data2.link} className="btn btn-orange" >Read Details</a></td>
										    </tr>
                  			))}
										     
										  </tbody>
										</table>
				        		</div>
				        		<div className="col-md-4 text-center">
				        			<img src={assetUrl + "/public/Award_img/" + data.award_image4} className="img-fluid mb-3"/>
				        		</div>
				        	</div>
				        </div>
				        <div className="blue-strip mt-5 align-items-center">
				        	<div className="blue-l">
				        		<h3 className='mb-0'>For Award Nomination Categories And Details</h3>
				        	</div>
				        	<div className="blue-r">
				        		<a target="_blank" href={data.link}><img src={`${process.env.PUBLIC_URL}/images/awards/www-cion.png`}/>Please Visit </a>
				        	</div>
				        </div>
				        <div className="row mt-5">
							<div className="col-md-12">
								<div className="heading mb-3">
					                <h2>Jury Panel of ISGF Innovation Awards</h2>
					            </div>
					            <p>Below mentioned independent jury comprising of distinguished experts will evaluate the nominations and decide upon the winners</p>
					        </div>
						</div>
						<div className="row g-4">
                     {(getIsJury) && getIsJury.map((data,index)=>(
				       			<div className="col-md-4">
				       				<div className="testi-box">
				       						<div className="pic">
				       							<img src={assetUrl + "/public/forum_img/" + data.image}/>
											</div>
											<div className='name'>{data.title}</div>
											<div className='des'>{data.designation}</div>
											<a href="#" data-bs-toggle="modal" data-bs-target={`#collapseTwo${index}`}>Brief Profile</a>
				       						
				       					</div>
				       					<div className="awards-model">
													<div className="modal fade" id={`collapseTwo${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
													  <div className="modal-dialog">
													    <div className="modal-content">
													      <div className="modal-body">
													      	<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
													        <h3 className="title">Brief Profile of Jury Panel</h3>
													        <div className="client-box mt-3">
													        	<img src={assetUrl + "/public/forum_img/" + data.image}/>
													        	<div className="right-1">
													        		<h3>{data.title}</h3>
													        		<p className="sub-title">{data.designation}</p>
													        	</div>
													        </div>
                    							{parse(`${data.bio}`)}
													         
													      </div>
													    </div>
													  </div>
													</div>
								       		</div>
				       				</div>
                      ))}
				       				 
				       		</div>
				       		<div className="award-levels mt-5" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/awards/award-green-bg.png"})`}}>
				       					<div className="row">
				       						<div className="col-md-12">
				       					<div className="heading mb-3">
							                <h2>ISGF Innovation Awards</h2>
							            </div>
							            <p>The Award is awarded in below mentioned levels under each category</p>
							            <div className="row text-center justify-content-between">
				       						<div className="col-md-3">
				       							<img src={assetUrl + "/public/Award_img/" + data.award_image1} className="img-fluid"/>
				       						</div>
				       						<div className="col-md-3">
				       							<img src={assetUrl + "/public/Award_img/" + data.award_image2} className="img-fluid"/>
				       						</div>
				       						<div className="col-md-3">
				       							<img src={assetUrl + "/public/Award_img/" + data.award_image3} className="img-fluid"/>
				       						</div>
				       					</div>
				       				</div>
				       			</div>
				       		</div>
				       		<div className="how-to-apply mt-5">
				       			<div className="heading mb-3">
							        <h2>How to Apply? </h2>
							    </div>
							    {parse(`${data.how_apply}`)}
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

export default Awards