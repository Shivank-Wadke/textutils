import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClr =() => {
        let newText="";
        setText(newText)
    }
    
    return (
        <>
        <div className='container'>
            <h1 style={{color:props.h1Color}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}id="exampleFormControlTextarea1" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClr}>ClearText</button>
            
        </div>
        <div className="container my-3" >
            <h2 style={{color:props.h1Color}}>Your Text Summary</h2>
            <p style={{color:props.h1Color}}> ~ {text.length} characters and {text.split(" ").length} words</p>
            <p style={{color:props.h1Color}}>~ {0.008*text.split(" ").length} Minutes read</p>
            <h2 style={{color:props.h1Color}}>Preview</h2>
            <p style={{color:props.h1Color}}>{text}</p>
        </div>
        </>
    )
}
