import React from 'react'
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const distributionSmartUtilityWeeks = GLOBAL.BASE_URL+"distributionSmartUtilityWeeks";

function DistributionUtilityMeet() {
	const [getIndiaSmart, setIndiaSmart] = React.useState(null);
  React.useEffect(() => {
    axios.get(distributionSmartUtilityWeeks).then((response) => {
    setIndiaSmart(response.data);
     });
   },[]);
  if (!getIndiaSmart) return null;
  // console.log(getIndiaSmart);

  return (
    <>
<section className="isgf-breadcum dum_banner_at_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/dum/dum-banner.jpg"
                  })`,
                }}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>Distribution Utility Meet (DUM)</h1>
			<p>Home {'>'} ISGF Initiatives  {'>'}  Distribution Utility Meet (DUM)</p>
		</div>
	</div>
</section>
<section className="dum">
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
         {(getIndiaSmart) && getIndiaSmart.map((data,index)=>(
				<div className="benefits_membership">
							<div className="heading mb-3">
			                	<h2>Distribution Utility Meet (DUM)</h2>
			            	</div>
				             {parse(`${data.sixth_edition_distribution}`)}
				            <img src={assetUrl + "/public/banner_img/" + data.image} width="100%"/>
				            <div className="isuw-gray-box mt-5">
				            	<h3 className="mb-3 h-3">About DUM</h3>
				            	{parse(`${data.about_dum}`)}
				            	 </div>
				            <h3 className="mt-5 h-3">Last Edition of DUM</h3>
				            	{parse(`${data.last_dum}`)}
										<h3 className="mt-5 h-3">Previous Editions of DUM</h3>
							  				            	{parse(`${data.previous_dum}`)}
							  				            	<img
			                src={`${process.env.PUBLIC_URL}/images/dum/dum-2.jpg`}
			                alt=""
			                className="isgf-logo"
			              />
							<h3 className="mt-5 h-3">The Last Edition of DUM</h3>
							<div className="slider">
								<div className="carousel-wrapper">
	                <Carousel infiniteLoop useKeyboardArrows autoPlay>
        							 {(data.last_edition_isuw) && data.last_edition_isuw.map((data1,index)=>(
	                    <div>
											    <img src={assetUrl + "/public/" + data1} className="img-fluid"/>
	                    </div>
        								))}
	                </Carousel>
	        		</div>
							</div>
							
							<div className="text-center">
								<a target="_blank" href={data.link} className="btn btn-blue mb-5" > Visit Website</a>
							</div>
						</div>
				))}

				
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

export default DistributionUtilityMeet