import "./App.css"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
	return (
		<>
			<Navbar title="React App" />
			<div className="container">
				<TextForm heading="Enter text"/>
			</div>
		</>
	)
}

export default App
