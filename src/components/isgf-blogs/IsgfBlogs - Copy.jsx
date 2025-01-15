import React from 'react';
import Media from '../reusable/Media';
import axios from "axios";
import parse from 'html-react-parser';
import Moment from 'react-moment';
import { NavLink, Link } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"blogs";
const assetUrl = GLOBAL.assetUrl;
function IsgfBlogs() {
  const [getBlog, setBlog] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setBlog(response.data);
     });
   },[]);
  if (!setBlog) return null;
  return (
    <>
<section className="isgf-breadcum blogs_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/blogs/blogs-banner.jpg"
                  })`,
                }}>
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12">
				<div className="isgf-breadcum-box">
					<h1>ISGF Smart Grid Blog</h1>
					<p>Home {'>'} ISGF Smart Grid Blog</p>
				</div>
				<Media/>	
			</div>
		</div>
	</div>
</section>
<section className="sec-padd">
	<div className="container">
				<div className="heading flex-none mb-5">
					<div className="row justify-content-between">
						<div className="col-md-6">
							<h2>ISGF Smart Grid Blog</h2>
						</div>
						<div className="col-md-2">
							<select className="form-select btn btn-orange text-start" aria-label="Default select example">
								<option selected>Filter By Tags</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>	
					</div>
				</div>
				<div className="row g-5">
         {(getBlog) && getBlog.map((data,index)=>(
					<div className="col-lg-4 col-sm-6">
						<div className="blogs-box">
							<div className="img-box">
								<img src={assetUrl + "/public/blogs/" + data.images}/>
								<p className="green-box">{data.title}</p>
							</div>
							<div className="inner-blog">
								
								{/* <p className="green mt-2"><Moment format="DD MMMM YYYY">
                               {data.created_at}
							  
                          </Moment> </p> */}
						  {((data.add_date != null))  ? <><p className="green mt-2">{data.add_date}</p> </>: <>  </>}
								<p>By {data.created_by} </p>
								<NavLink to={data.blog_slug}> <h5>{data.heading}</h5></NavLink>
							</div>
						</div>
					</div>
          ))}
					 
				</div>
		    
	</div>
</section>
    </>
  )
}

export default IsgfBlogs