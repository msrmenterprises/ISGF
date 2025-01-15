import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"bulletin";
const assetUrl = GLOBAL.assetUrl;
function SmartGridBulletin() {
	const [getBulletin, setBulletin] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setBulletin(response.data);
     });

   },[]);
  if (!getBulletin) return null;
  return (
    <>
<section className="isgf-breadcum isgf_smart_grid_bulletin_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bulletin/bulletin-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>Smart Grid Bulletin</h1>
			<p>Home {'>'} Media {'>'} Smart Grid Bulletin</p>
		</div>
	</div>
</section>
<section className="smart_grid_bulletin">
	<div className="container">
		<div className="row">
			<div className="col-lg-8 ">
				<div className="heading mb-3">
					<h2>Smart Grid Bulletin</h2>
				</div>
				<div className="isgf_accordion">
						<div className="accordion" id="accordionExample">

			{(getBulletin) && getBulletin.map((data,index)=>(
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
											<th scope="col">Title</th>
											<th scope="col">Photo</th>
											<th scope="col"></th>
											
										</tr>
										</thead>
										<tbody>
										{(data.list) && data.list.map((data1,index)=>(
										<tr>
											<td className="no-blue" scope="row">{index+1}</td>
											<td>{data1.title} </td>
										
											<td className="text-center"><img className='img-fluid' src={assetUrl + "/public/bulletin/" + data1.photo}/></td>
											<td className="text-center"><a href={data1.link} className="btn btn-orange" target="_blank">Click Here</a></td>
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

export default SmartGridBulletin