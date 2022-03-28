import React from "react"

export default function About() {
	return (
		<div className="container my-5 text-center">
			<h3> About </h3>
			<div  ame="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Accordion Item #1
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This is the first React app i did.</strong> This is
							done for learning purpose and uses basic concepts of react
							to develop this site.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Accordion Item #2
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This Basically body.</strong>
							It is hidden by default, until the collapse plugin adds the
							appropriate classes that we use to style each element.
							These classes control the overall appearance, as well as
							the showing and hiding via CSS transitions. You can modify
							any of this with custom CSS or overriding our default
							variables. It's also worth noting that just about any HTML
							can go within the <code>.accordion-body</code>, though the
							transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Accordion Item #3
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This is the third item's accordion body.</strong>{" "}
							It is hidden by default, until the collapse plugin adds the
							appropriate classes that we use to style each element.
							These classes control the overall appearance, as well as
							the showing and hiding via CSS transitions. You can modify
							any of this with custom CSS or overriding our default
							variables. It's also worth noting that just about any HTML
							can go within the <code>.accordion-body</code>, though the
							transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
			<button type="button" className="btn btn-outline-secondary my-5">
				Dark/Light Mode
			</button>
		</div>
	)
}
