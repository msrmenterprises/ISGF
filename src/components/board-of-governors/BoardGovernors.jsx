import React from 'react';
import Media from '../reusable/Media';
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import Sidebar from '../reusable/Sidebar'
const GLOBAL = require('../../commonConstants.js');

const assetUrl = GLOBAL.assetUrl;;
const boardGovernor = GLOBAL.BASE_URL+"boardGovernor";

function BoardGovernors() {
  const [getGovernor, setGovernor] = React.useState(null);
  React.useEffect(() => {
    axios.get(boardGovernor).then((response) => {
    setGovernor(response.data);
     });
   },[]);
  return (
    <>
<section className="isgf-breadcum isgf_board_of_governors_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/board-of-governors/board-of-governors.jpg"
                  })`,
                }}>
	<div className="container">
		<div className="isgf-breadcum-box">
					<h1>Board of Governors (BOG)</h1>
          <p>Home {'>'} ISGF {'>'} ISGF Organizational Structure {'>'} Board of Governors (BOG)</p>
				</div>
	</div>
</section>
<section className="sec-padd">
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				
				<div className="row">
					<div className="col-md-12">
						<div className="benefits_membership">
							<div className="heading mb-3">
			                	<h2>Board of Governors (BOG)</h2>
			            	</div>
				            <div className="mb-3">
				       			<p>The Office Bearers of ISGF are elected from amongst its Members</p>	
				       			<div className="row g-4">
                      {(getGovernor) && getGovernor.map((data,index)=>(

				       				<div className="col-md-6 col-lg-4">
					       				<div className="team-box">
					       					<div className="designation">
					       							{data.designation}
					       					</div>
					       					<div className="image">
					       						<img src={assetUrl + "/public/forum_img/" + data.image} className="img-fluid mt-4"/>
					       					</div>
					       					<div className="name">
					       						{data.title}
					       					</div>
					       					<div className="social">
					       					
											   {((data.twitter != null) && (data.twitter != '#'))  ? <>
                                                   <a target="_blank" href={data.twitter} className="fa fa-twitter"></a> </>: <>
												   <a href="" className="fa fa-twitter disabled"></a> 
											   </>}
											   
                                               {((data.linked_in != null) && (data.linked_in != '#'))  ? <><a target="_blank" href={data.linked_in} className="fa fa-linkedin"></a> </>: <> <a   href=""className="fa fa-linkedin disabled"></a></>}
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

export default BoardGovernors;