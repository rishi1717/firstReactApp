import React,{useState} from "react"

export default function TextForm(props) {
    const handleClick = () =>{
        console.log('Button clicked');
        let newText = text.toUpperCase()
        setText(newText)
    }
    const onChange = (event)=>{
        console.log('on Change');
        setText(event.target.value)
    }
    const [text,setText] = useState('enter your text here')
	return (
		<div className="text-center justify-content-center">
			<h3 className="pt-5">{props.heading}</h3>
			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput2"
					placeholder="Enter your text"
                    value={text} 
                    onChange={onChange}
				/>
			</div>
			<button onClick={handleClick} className="btn btn-primary">Convert to uppercase</button>
		</div>
	)
}
