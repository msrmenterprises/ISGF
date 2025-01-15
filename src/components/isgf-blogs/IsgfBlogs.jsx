import React from 'react';
import Media from '../reusable/Media';
import axios from "axios";
import parse from 'html-react-parser';
import Moment from 'react-moment';
import { NavLink, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
const GLOBAL = require('../../commonConstants.js');
const blog = GLOBAL.BASE_URL+"blogs";
const Category = GLOBAL.BASE_URL+"Category";
const assetUrl = GLOBAL.assetUrl;
function Items({ currentItems }) {
  return (
    <>
    	<div className="row g-5">
         {(currentItems) && currentItems.map((data,index)=>(
					<div className="col-lg-4 col-sm-6">
						<div className="blogs-box">
							<div className="img-box">
								<img src={assetUrl + "/public/blogs/" + data.images}/>
								<p className="green-box">{data.title}</p>
							</div>
							<div className="inner-blog">

							<p className="green mt-2">
									{((data.add_date != null))  ? <>
									<Moment format="DD MMMM YYYY">
                      {data.add_date}
                  </Moment>
                   </>: <> <p></p> </>}
                </p>
								<p>By {data.created_by} </p>
								<NavLink to={data.blog_slug}> <h5>{data.heading}</h5></NavLink>
								<p className='blog-short-text'>{parse(`${data.descriptions}`)}</p>
							</div>
						</div>
					</div>
          ))}

				</div>

    </>
  );
}
function IsgfBlogs() {
  var url = "";
  const [getBlog, setBlog] = React.useState(null);
  const [getValue, setValue] = React.useState(null);
  const [getCategory, setCategory] = React.useState(null);
  const [currentItems, setCurrentItems] = React.useState(null);
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  React.useEffect(() => {
  	if (getValue && getValue != null) {
      url = blog + "/" + getValue;
    } else {
      url = blog;
    }

    axios.get(url).then((response) => {
    setBlog(response.data);
    const endOffset = itemOffset + 9;
    setCurrentItems((response.data).slice(itemOffset, endOffset));
    setPageCount(Math.ceil((response.data).length / 9));
     });
    axios.get(Category).then((response) => {
    setCategory(response.data);
     });
	 window.scrollTo(0, 0);

   },[itemOffset, 9,getValue]);
   const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % getBlog.length;

    setItemOffset(newOffset);
  };
  if (!currentItems) return null;
  if (!setBlog) return null;
  console.log(getValue);
  return (<>
			<section className="isgf-breadcum blogs_breadcum" style={{
							backgroundImage: `url(${ process.env.PUBLIC_URL + "/images/blogs/blogs-banner.jpg"})`, }}>
				<div className="container">

							<div className="isgf-breadcum-box">
								<h1>Smart Grid Blog</h1>
								<p>Home {'>'}Smart Grid Blog</p>
							</div>
						</div>
			</section>
		<section className="sec-padd">
			<div className="container">
				<div className="heading flex-none mb-5">
					<div className="row justify-content-between">
						<div className="col-md-6">
							<h2>Smart Grid Blog</h2>
						</div>
						<div className="col-md-3">
							<select   onChange={e => setValue(e.target.value)}  className="form-select btn btn-orange text-start" aria-label="Default select example">
												<option selected>Filter By Tags</option>
											{(getCategory) && getCategory.map((data,index)=>(
												<option value={data.id}>{data.title}</option>
										))}
							</select>
						</div>
					</div>
				</div>
				{((currentItems.length != 0))  ? <>
				<Items currentItems={currentItems} />
				<ReactPaginate
					previousLabel={"← Previous"}
					nextLabel={"Next →"}
					pageCount={pageCount}
					onPageChange={handlePageClick}
					containerClassName={"pagination"}
					previousLinkClassName={"pagination__link"}
					nextLinkClassName={"pagination__link"}
					disabledClassName={"pagination__link--disabled"}
					activeClassName={"pagination__link--active"}/>
         </>: <> <p>
        	No Data found.
         </p> </>}
			</div>
		</section>
    </>
  )
}

export default IsgfBlogs