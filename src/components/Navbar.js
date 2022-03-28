import React from "react"

export default function Navbar(props) {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					{props.title}
				</a>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active" aria-current="page" href="/">
							Home
						</a>
						<a className="nav-link" href="/">
							Features
						</a>
						<a className="nav-link" href="/">
							Pricing
						</a>
					</div>
				</div>
				<div className={`form-check form-switch mx-3 text-${props.mode==='dark'?'light':'dark'}`}>
					<label
						className="form-check-label"
						classFor="flexSwitchCheckDefault text"
					>
						Switch mode
					</label>
					<input
						className="form-check-input"
						type="checkbox"
						id="flexSwitchCheckDefault"
						onClick={props.toggleMode}
					/>
				</div>
				<form className="d-flex">
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button className="btn btn-outline-primary" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	)
}
