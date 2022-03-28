import React, { useState } from "react"

export default function TextForm(props) {
	const handleupClick = () => {
		console.log("Button clicked")
		let newText = text.toUpperCase()
		setText(newText)
	}
	const handlelowClick = () => {
		console.log("Button clicked")
		let newText = text.toLowerCase()
		setText(newText)
	}
	const onChange = (event) => {
		console.log("on Change")
		setText(event.target.value)
	}
	const [text, setText] = useState("enter your text here")
	return (
		<div className="container">
			<div className="text-center justify-content-center">
				<h3 className="pt-5">{props.heading}</h3>
				<div className="mb-3">
					<textarea
						className="form-control"
						style={{
							backgroundColor: props.mode === "light" ? "white" : "grey",
							color: props.mode === "light" ? "grey" : "white",
						}}
						id="formGroupExampleInput2"
						placeholder="Enter your text"
						value={text}
						onChange={onChange}
						rows="8"
					></textarea>
				</div>
				<button
					onClick={handleupClick}
					className={`btn btn-${
						props.mode === "light" ? "dark" : "light"
					} btn-sm m-1`}
				>
					Convert to UPPERCASE
				</button>
				<button
					onClick={handlelowClick}
					className={`btn btn-${
						props.mode === "light" ? "dark" : "light"
					} btn-sm m-1`}
				>
					Convert to lowercase
				</button>
			</div>
			<div className="text-center py-4">
				<h3>Text summary</h3>
				<p>
					Your text contains {text.length} letters and{" "}
					{text.split(" ").length} words
				</p>
				<p>{0.008 * text.split(" ").length} minutes read</p>
			</div>
		</div>
	)
}
