import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"press-release";
const assetUrl = GLOBAL.assetUrl;
function PressRelease() {
	const [getPress, setPress] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setPress(response.data);
     });

   },[]);
  if (!getPress) return null;
  // console.log(getPress)
  return (
    <>
<section className="isgf-breadcum isgf_press_release_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/press-release/press-release-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>ISFG Press Release</h1>
			<p>Home {'>'} Media {'>'}  ISFG Press Release</p>
		</div>
	</div>
</section>
<section className="press-release">
	<div className="container">
		<div className="row">
			<div className="col-lg-8 ">
				<div className="heading mb-3">
					<h2>ISGF Press Release</h2>
				</div>
				<div className="isgf_accordion">
				            		 <div className="accordion" id="accordionExample">

                 			{(getPress) && getPress.map((data,index)=>(
										  <div className="accordion-item">
										    <h2 className="accordion-header bg-green" id="heading1">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapseOne${index}`}
                            aria-expanded="false"
                            aria-controls={`collapseOne${index}`}
                          >
										      {data.title}
										      </button>
										    </h2>
										    <div
                          id={`collapseOne${index}`}
                          className="accordion-collapse collapse p-3"
                          aria-expanded="false"
                          aria-labelledby="heading1"
                          data-bs-parent="#accordionExample"
                        >
										      <div className="accordion-body">
										         <table className="table table-bordered">
													  <thead>
													    <tr>
													      <th scope="col">S.No</th>
													      <th scope="col">Heading</th>
													      <th scope="col">Date</th>
													      <th scope="col">Language</th>
													      <th scope="col">Link</th>
													    </tr>
													  </thead>
													  <tbody>
                 						{(data.list) && data.list.map((data,index)=>(

													    <tr>
													      <td className="no-blue" scope="row">{index+1} </td>
													      <td>{data.heading}</td>
													      <td>{data.date}</td>
													      <td>{data.language}</td>
													      <td><a target="_blank" href={data.link} className="btn btn-orange">Click Here</a></td>
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
		    <div className="col-lg-4">
		    	<Sidebar/>
		    </div>
	</div>
    </div>
</section>

    </>
  )
}

export default PressRelease