import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Navbar from "./components/About"
import TextForm from "./components/TextForm"

function App() {
	const [mode,setMode]=useState('light')
	const toggleMode=()=>{
		if(mode === 'light'){
			setMode('dark')
			document.body.style.backgroundColor="#3A3B3C"
			document.body.style.color="#CECECE"
		}else{
			setMode('light')
			document.body.style.backgroundColor="white"
			document.body.style.color = "#3A3B3C"
		}
	}
	return (
		<>
			<Navbar title="React App" mode={mode} toggleMode={toggleMode} />
			<TextForm heading="Enter text" mode={mode} />
			<About />
		</>
	)
}

export default App
