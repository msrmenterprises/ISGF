import React from 'react'; 
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import parse from 'html-react-parser';
import axios from "axios";
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"BilateralEventMappings";
const assetUrl = GLOBAL.assetUrl;
function BilateralWorkshops() {
	const [getWork, setWork] = React.useState(null);
    React.useEffect(() => {
    axios.get(url).then((response) => {
    setWork(response.data);
     });
   },[]);
    // console.log(getWork);
  if (!getWork) return null;
  return (
    <>
<section className="isgf-breadcum isgf_bilateral_workshops_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bilateral-workshops/bilateral-workshops-banner.jpg"})`}}>
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12">
				<div className="isgf-breadcum-box">
					<h1>Bilateral Workshops</h1>
					<p>Home {'>'} ISGF Initiatives {'>'} Bilateral Workshops</p>
				</div>
				<Media/>	
			</div>
		</div>
	</div>
</section>
<section className="bilateral-workshops">
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-8 ">
				<div className="row">
					<div className="col-md-12">
						<div className="heading mb-3">
			                <h2>ISGF Bilateral Events</h2>
			            </div>
			        
					</div>
				</div>
				
				<div className="row">
					<div className="col-md-12">
						<div className="benefits_membership">
				            <div className="mb-3">
				                <div className="isgf_accordion">
				            		 <div className="accordion" id="accordionExample">
                    {(getWork) && getWork.map((data,index)=>(
										  <div className="accordion-item">
										    <h2 className="accordion-header bg-green" id="heading1">
										      <button className={`accordion-button ${(index ==0)? '':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls="collapse1">
										      <img src={assetUrl + "/public/BilateralEvent_img/" + data.image}/> {data.title}
										      </button>
										    </h2>
										    <div id={`collapseOne${index}`} className={`accordion-collapse p-3 collapse ${(index ==0)? 'hide':''}`} aria-labelledby="heading1" data-bs-parent="#accordionExample">
										      <table className="table table-bordered">
												  <thead>
												    <tr>
												      <th scope="col">Events</th>
												      <th scope="col">Details</th>
												    </tr>
												  </thead>
												  <tbody>
                          {data.event_map.map((data1,index)=>(
												    <tr>
												      <td>{data1.title}</td>
												      <td><a href="#" className="btn btn-orange" data-bs-toggle="modal" data-bs-target="#exampleModal"> Read Details</a></td>
												    
												    </tr>
                          ))}
												  </tbody>
												</table>
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
		    <div className="col-md-4">
		    	<Sidebar/>
		    </div>
	</div>
    </div>
</section>


    </>
  )
}

export default BilateralWorkshops