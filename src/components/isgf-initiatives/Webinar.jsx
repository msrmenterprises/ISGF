import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Media from '../reusable/Media';
import Moment from 'react-moment';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const media = GLOBAL.BASE_URL+"webinar";
const assetUrl = GLOBAL.assetUrl;
//Owl Carousel Slider
const webinar = {
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    },
  };


function Webinar() {
		const [getMedia, setMedia] = React.useState(null);
  const [getValue, setValue] = React.useState(null);
	var  url = '';
  React.useEffect(() => {
  	if (getValue && getValue != null) {
         url = media + "?date=" + getValue ;
    }else {
      	url = media;
    }
    axios.get(url).then((response) => {
    setMedia(response.data);
     });

   },[getValue]);
  if (!getMedia) return null;
 
  return (
    <>
<section className="isgf-breadcum webinar_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/webinar/webinar-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>Webinar Repository</h1>
			<p>Home {'>'} ISGF Initiatives {'>'}  Webinar Repository</p>
		</div>
	</div>
</section>
<section className="webinar">
	<div className="container">
		<div className="row">
			<div className="col-lg-8 ">

				<div className="row">
					<div className="col-md-12">
						<div className="benefits_membership">
							<div className="heading mb-3">
			                	<h2>Webinar Repository</h2>
			            	</div>
				        </div>
					</div>
				</div>
				<div className="row webinar-owl">
					<div className="col-md-12">
                    <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              {...webinar}
            >
						    <div className="item text-center">
						    	<ul className="nav nav-tabs" id="myTab" role="tablist">

								  <li className="nav-item">
							            <a onClick={event => setValue('')}    className="nav-link active" data-bs-toggle="tab">All</a>
							        </li>
							        <li className="nav-item">
							            <a onClick={event => setValue('2023')}    className="nav-link " data-bs-toggle="tab">2023</a>
							        </li>
							        <li className="nav-item">
							            <a onClick={event => setValue('2022')}    className="nav-link " data-bs-toggle="tab">2022</a>
							        </li>
							        <li className="nav-item">
							            <a onClick={event => setValue('2021')}    className="nav-link " data-bs-toggle="tab">2021</a>
							        </li>
							        <li className="nav-item">
							            <a onClick={event => setValue('2020')}   className="nav-link" data-bs-toggle="tab">2020</a>
							        </li>
							        <li className="nav-item">
							            <a onClick={event => setValue('2019')}    className="nav-link" data-bs-toggle="tab">2019</a>
							        </li>
							        <li className="nav-item">
							            <a  onClick={event => setValue('2018')} href="#t18" className="nav-link" data-bs-toggle="tab">2018</a>
							        </li>


							</ul>
						    </div>
						    {/* <div className="item">
						    	<ul className="nav nav-tabs" id="myTab" role="tablist">
							    	<li className="nav-item" role="presentation">
										<button className="nav-link" id="east-tab" data-bs-toggle="tab" data-bs-target="#east" type="button" role="tab" aria-controls="east" aria-selected="false">2015</button>
									</li>
								</ul>
						    </div> */}
                            </OwlCarousel>

						<div className="tab-content" id="myTabContent">
							  <div className="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
							  	<div className="row">
									<div className="col-md-12 mb-3">
										<div className="webinar-box">
											<h3>Webinar Repository {getValue}</h3>
     										{(getMedia) && getMedia.map((data,index)=>(
											<div className="webinar-repo mb-3">
												<div className="left">
													{index+1}
												</div>
												<div className="right">
													<p className="b">
															   <Moment format="DD MMMM YYYY">
									                              	{data.add_date}
									                          </Moment></p>
													<p className="u">{data.title}</p>
													<p className="o"><b>Organizer</b>: {data.organizer}</p>
													<a href="#" className="btn btn-orange" data-bs-toggle="modal" data-bs-target={`#collapseOne${index}`}> View Details</a>

													 <div>
													 	{(data.tags) && data.tags.map((data1,index)=>(
															<a href={"#"} className="btn btn-gray mt-2">{data1}</a>
                                  							))}
													 </div>
												</div>
												<div className="modal fade webinar-model" id={`collapseOne${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
											  <div className="modal-dialog">
											    <div className="modal-content">

											      <div className="modal-body">
											      	<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											        <div className="career_at_model">
											        	<h3 className="mb-3">Webinar Repository</h3>
											        	<p className="b">{data.title}</p>
											        	<p><b><Moment format="DD MMMM YYYY">
											        			  {((data.add_date != null ))  ? <>
									                              	{data.add_date}
									                              	</>: <>  </>}
									                          </Moment></b></p>
											        	<p><b>Organizer :</b> {data.organizer} </p>
						        	                    {parse(`${data.description}`)}
														<p><b>Source: </b> <a target="_blank" href={data.readmore} className="text-break btn btn-gray mt-2">{data.readmore}</a></p>
											        	<div>
								        			   {((data.recording != null ))  ? <>

											        		{/* <a href={assetUrl + "/public/webinar/" + data.attachment}	 className="btn btn-green mt-3">View Attachment</a>  */}
															<a target="_blank" href={data.recording} className="btn btn-dark-orange mt">View Recording</a>
						                              	</>: <>  </>}
											        	</div>
											        	<div className="mt-4">
     														{(data.tags) && data.tags.map((data1,index)=>(
															<a href={"#"} className="btn btn-gray mt-2">{data1}</a>
                                  							))}
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

								</div>
							  </div>
							  <div className="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">B</div>
							  <div className="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">...</div>
							  <div className="tab-pane fade" id="fourth" role="tabpanel" aria-labelledby="fourth-tab">...</div>
							  <div className="tab-pane fade" id="five" role="tabpanel" aria-labelledby="five-tab">...</div>
							  <div className="tab-pane fade" id="six" role="tabpanel" aria-labelledby="six-tab">...</div>
							  <div className="tab-pane fade" id="sevant" role="tabpanel" aria-labelledby="sevant-tab">...</div>
							  <div className="tab-pane fade" id="east" role="tabpanel" aria-labelledby="east-tab">...</div>
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

export default Webinar