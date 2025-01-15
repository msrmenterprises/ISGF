import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import Moment from 'react-moment';
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const themes = GLOBAL.BASE_URL+"technical-paper-theme";
const publish = GLOBAL.BASE_URL+"published-technical-paper";
const jury = GLOBAL.BASE_URL+"juryMember";
const technicalPaper = GLOBAL.BASE_URL+"technicalPaper";

function TechnicalPapers() {
	const [getTechnicalPaper, setTechnicalPaper] = React.useState(null);
	const [getTheme, setTheme] = React.useState(null);
	const [getPublished, setPublished] = React.useState(null);
	const [getJury, setJury] = React.useState(null);
  React.useEffect(() => {
    axios.get(themes).then((response) => {
    setTheme(response.data);
     });
    axios.get(publish).then((response) => {
    setPublished(response.data);
     });
    axios.get(jury).then((response) => {
    setJury(response.data);
     });
    axios.get(technicalPaper).then((response) => {
    setTechnicalPaper(response.data);
     });

   },[]);
  if (!getTheme) return null;
  if (!getPublished) return null;
  if (!getJury) return null;
  if (!getTechnicalPaper) return null;
  // console.log(getTechnicalPaper);
  return (
    <>
<section className="isgf-breadcum isgf_technical_papers_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/technical-papers/technical-papers-banner.png"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>ISUW Technical Papers</h1>
			<p>Home {'>'}   ISGF Initiatives   {'>'}  ISUW Technical Papers</p>
		</div>
	</div>
</section>
<section className="technical-papers">
	<div className="container">
		<div className="row">
			<div className="col-lg-8 ">
				<div className="row">
					<div className="col-md-12">
						<div className="heading mb-3">
			                <h2>ISUW Technical Papers</h2>
			            </div>
			            <p>Since 2016, ISGF invites Technical Papers on the latest themes related to Power Sector to recognize the best Technical Papers in the industry as part of its annual flagship event India Smart Utility Week (ISUW) an International Conference and Exhibition on Smart Energy and Smart Mobility. The authors of the top 25 technical papers selected by an expert jury panel get the opportunity to present their papers at India Smart Utility Week (ISUW) which witnesses participation of Visionary Leaders, Utility CEOs, Regulators, Policy Makers and Subject Matter Experts from 50+ Countries every year. Top 50 Authors get the opportunity to get their technical papers published with renowned publishing house/ISGFs Portal.</p>

					</div>
				</div>

				<div className="heading mb-3">
					<h2>ISUW Technical Papers Overview</h2>
				</div>
				<div className="isgf_accordion">
						<div className="accordion accordion-flush" id="accordionFlushExample">

							<div className="accordion-item">
							<h2 className="accordion-header bg-green" id="flush-headingOne">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
									View Published Technical Papers
								</button>
							</h2>
							<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
								<table className="table blue-table table-bordered mt-2 table-responsiv">
									<tbody>
									<tr>
										<th>Year</th>
										<th>Title</th>
										<th>Shortlisted Papers for Presentation and Publication</th>
										<th>Published Compendium</th>
										<th>Published Technical Papers</th>
									</tr>
								{(getPublished) && getPublished.map((data,index)=>(
									<tr>
										<td>{data.year}</td>
										<td>{data.title}</td>
										<td><a target="_blank" href={data.shortlisted_paper_url} className="btn btn-orange" >View Shortlisted Paper</a></td>
										<td>{data.published_compendium} <br/><a  target="_blank" href={data.published_compendium_url} className="btn btn-green mt-2" >View Compendium</a></td>
										<td>{data.published_technical_papers} <br/><a  target="_blank" href={data.published_technical_papers_url} className="btn btn-orange" >View Technical Paper</a></td>
									</tr>
									))}
									</tbody>
								</table>
								</div>
							</div>
							</div>
							<div className="heading my-4">
								<h2>ISUW 2022 Technical Papers Themes</h2>
							</div>
							<p>The Themes for Technical Papers 2022 were:</p>
				{(getTheme) && getTheme.map((data,index)=>(
						<div className="accordion-item">

						<h2 className="accordion-header bg-green" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="false" aria-controls={`#collapseOne${index}`}>
								{data.title} </button>
							</h2>
							<div id={`collapseOne${index}`} className="accordion-collapse collapse" aria-labelledby={`collapseOne${index}`} data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
								{(data.list) && data.list.map((data1,index)=>(
								<div className="row mt-3">
									<div className="col-md-1">
										<img src={`${process.env.PUBLIC_URL}/images/technical-papers/arrow-1.png`}/>
									</div>
									<div className="col-md-11">
									{data1}
									</div>
								</div>
									))}
								</div>
							</div>
						</div>
				))}

					</div>
				</div>

				<p>For the year 2022, total of 180 abstracts were received out of which 106 abstracts were shortlisted by esteemed Jury Panel for full technical paper submission. As per the guidelines given by Jury Members, 76 Full Papers were further evaluated by Jury Members out of which 57 Papers were shortlisted this year. Top 25 Papers were given an opportunity to present at ISUW 2022, organized from 02 – 04 March 2022.  Top 57 selected Technical Papers are published in this compendium of Technical Papers.</p>


				<div className="heading mb-3">
					<h2>Esteemed Jury Members ISUW 2022 Technical Papers</h2>
				</div>
				<div className="row g-4">
                     {(getJury) && getJury.map((data,index)=>(
				       				<div className="col-sm-6 col-md-4">
				       			   		<div className="testi-box">
											<div className="pic">
												<img alt="pic" src={assetUrl + "/public/forum_img/" + data.image}/>
											</div>
											<div className='name'>{data.title} </div>
											<div className='des'>{data.designation}</div>
											<a href="#" data-bs-toggle="modal" data-bs-target={`#collapseTwo${index}`}>Brief Profile</a>
				       					</div>

				       				<div className="row technical-papers-model">
				       				<div className="col-md-12">
				       					<div className="modal fade" id={`collapseTwo${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										  <div className="modal-dialog">
										    <div className="modal-content">
										       <div className="modal-body">
										       	<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										        <div className="">
										        	<h3>Brief Profile of Jury Members</h3>
										        	<div className="tech-model-inner mt-3">
										        		<div className="tech-model-inner-left">
										        			<img src={assetUrl + "/public/forum_img/" + data.image}/>
										        		</div>
										        		<div >
										        			<h4>{data.title}</h4>
										        			<h5>{data.designation}</h5>
										        		</div>
										        	</div>
										        	<p className="mt-4">{data.designation2}</p>
                    							{parse(`${data.bio}`)}

										        </div>
										       </div>
										    </div>
										</div>
				       				</div>
				       			</div>
				       		</div>
				       				</div>
                      ))}
 				       			</div>




 				       			<div className="row mt-5">
					<div className="col-md-12">
						<div className="heading mb-3">
					        <h2>ISGF Team</h2>
					    </div>
					</div>
				</div>
				<div className="row g-4">
                     {(getTechnicalPaper.member_list	) && (getTechnicalPaper.member_list).map((data,index)=>(
				       				<div className="col-sm-6 col-md-4">
				       			   		<div className="testi-box">
											<div className='pic'>
												<img src={assetUrl + "/public/forum_img/" + data.image}/>
											</div>
											<div className="name">{data.title} </div>
											<div className='des'>{data.designation}</div>
											<a href="#" data-bs-toggle="modal" data-bs-target={`#collapseThree${index}`}>Brief Profile</a>
				       				</div>
				       				<div className="row technical-papers-model">
				       				<div className="col-md-12">

		       					<div className="modal fade" id={`collapseThree${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										  <div className="modal-dialog">
										    <div className="modal-content">
										       <div className="modal-body">
										       	<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										        <div className="">
										        	<h3>Brief Profile of Jury Members</h3>
										        	<div className="tech-model-inner mt-3">
										        		<div className="tech-model-inner-left">
										        			<img src={assetUrl + "/public/forum_img/" + data.image}/>
										        		</div>
										        		<div >
										        			<h4>{data.title}</h4>
										        			<h5>{data.designation}</h5>
										        		</div>
										        	</div>
										        	<p className="mt-4">{data.designation2}</p>
                    							{parse(`${data.bio}`)}

										        </div>
										       </div>
										    </div>
										</div>
				       				</div>
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

export default TechnicalPapers