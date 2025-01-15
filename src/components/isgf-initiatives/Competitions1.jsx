import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import parse from "html-react-parser";
import axios from "axios";
const GLOBAL = require("../../commonConstants.js");
const url = GLOBAL.BASE_URL + "competition";
const assetUrl = GLOBAL.assetUrl;
function Competitions() {
const [getCompetition, setCompetition] = React.useState(null);
React.useEffect(() => {
axios.get(url).then((response) => {
setCompetition(response.data);
});
}, []);
// console.log(getCompetition);
if (!getCompetition) return null;
return (
<div>
<section
className="isgf-breadcum isgf_competitions_breadcum"
style={{
backgroundImage: `url(${
process.env.PUBLIC_URL +
"/images/competitions/competitions-banner.jpg"
})`,
}}
>
<div className="container">
<div className="isgf-breadcum-box">
<h1>ISGF Competitions</h1>
<p>
Home {">"} ISGF Initiatives {">"} ISGF Competitions
</p>
</div>
</div>
</section>
<section className="competitions">
<div className="container">
<div className="row">
<div className="col-lg-8">
<div className="row">
<div className="col-md-12">
	<div className="heading mb-3">
	<h2>ISGF Competitions</h2>
	</div>
</div>
</div>

<div className="row">
<div className="col-md-12">
	<p>
	​​​​​​​​​​​​ISGF in partnership with government,
	organizations, electricity distribution utilities, and
	academic institutions has conducted various competitions and
	innovation challenges and some of them were part of the
	India Smart Utility Week, an international conference
	focusing on smart utilities, innovative technologies,
	electric vehicle, energy storage etc. In all the ISGF
	Competitions, a shortlisting and screening criteria and a
	technology verification process is designed and an expert
	panel is formed for developing the scope of work for the
	challenges and selection of the wining proposal.
	</p>
	<h4 className="h-4">
	Following is the list of Competitions conducted by ISGF:
	</h4>
	<div className="">
	<div className="mb-3">
		<div className="isgf_accordion">
		<div
			className="accordion accordion-flush"
			id="accordionFlushExample"
		>
			{getCompetition &&
			getCompetition.map((data, index) => (
				<div className="accordion-item">
				<h2
					className="accordion-header bg-green"
					id={`flush-headingOne${index}`}
				>
					<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#flush-collapseOne${index}`}
					aria-expanded="false"
					aria-controls={`flush-collapseOne${index}`}
					>
					{data.heading}
					</button>
				</h2>
				<div
					id={`flush-collapseOne${index}`}
					className="accordion-collapse collapse"
					aria-labelledby={`flush-headingOne${index}`}
					data-bs-parent="#accordionFlushExample"
				>
					<div className="accordion-body">
					{parse(`${data.descriptions}`)}
					<div className="competitions-item mt-3">
						<div className="row g-4">
						<div className="col-md-4">
							<div className="item-box">
							<img
								src={`${process.env.PUBLIC_URL}/images/competitions/item-1.png`}
								className="mb-3"
							/>
							<h4 className="mb-2">
								{data.participants}
							</h4>
							<p>Participants</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item-box">
							<img
								src={`${process.env.PUBLIC_URL}/images/competitions/item-2.png`}
								className="mb-3"
							/>
							<h4 className="mb-2">
								{data.organizations}
							</h4>
							<p>Colleges and Organizations</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item-box">
							<img
								src={`${process.env.PUBLIC_URL}/images/competitions/item-3.png`}
								className="mb-3"
							/>
							<h4 className="mb-2">
								{data.Ideas}
							</h4>
							<p>Smart Ideas and Solutions</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item-box">
							<img
								src={`${process.env.PUBLIC_URL}/images/competitions/item-4.png`}
								className="mb-3"
							/>
							<h4 className="mb-2">
								{data.hours}
							</h4>
							<p>Hours</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item-box">
							<img
								src={`${process.env.PUBLIC_URL}/images/competitions/item-1.png`}
								className="mb-3"
							/>
							<h4 className="mb-2">
								INR {data.Prizes}
							</h4>
							<p>Lakhs Cash Prizes</p>
							</div>
						</div>
						</div>
					</div>
					<div className="row mt-3">
						{data.images &&
						data.images.map((data2, index) => (
							<div className="col-md-6 mb-3">
							<img
								src={
								assetUrl +
								"/public/uploads/" +
								data2
								}
								className="img-fluid"
							/>
							</div>
						))}
					</div>
					<div className="accordion-inner-blue mt-3">
						<div
						className="accordion accordion-flush"
						id={`accordionFlushExamples${index}`}
						>
						{data.competition &&
							data.competition.map(
							(data1, index) => (
								<div className="accordion-item">
								<h2
									className="accordion-header bg-green"
									id={`flush-headingOne1${index}`}
								>
									<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#flush-collapseOne1${index}`}
									aria-expanded="false"
									aria-controls={`flush-collapseOne1${index}`}
									>
									{data1.heading}
									</button>
								</h2>

								<div
									id={`flush-collapseOne1${index}`}
									className="accordion-collapse collapse"
									aria-labelledby={`flush-headingOne1${index}`}
									data-bs-parent={`accordionFlushExamples${index}`}
								>
									<div className="accordion-body">
									{parse(
										`${data1.descriptions}`
									)}
									</div>
								</div>
								</div>
							)
							)}
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
</div>
</div>
</div>
<div className="col-lg-4">
<Sidebar />
</div>
</div>
</div>
</section>
</div>
);
}

export default Competitions;
