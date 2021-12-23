import React , {useState} from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.changeAlert("Converted to uppercase","success");
    }

    const handleOnChange = (event) => {
        //console.log("Onchange was clicked")
        let newCount = text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
        setText(event.target.value);
        setWordCount(newCount);
    }

    const handleLoClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.changeAlert("Converted to lowercase","success");
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.changeAlert("Copied to clipboard","success");
    }
        
    const clear = () => {
        setText(' ')
        setWordCount('0')
        props.changeAlert("Cleared","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.changeAlert("Extra spaces removed","success");
    }
        
    
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState('0');

    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1>Enter your text to analyze</h1>
                    <textarea className="form-control" value={text} onChange={ handleOnChange } style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={wordCount===0} className="btn btn-primary my-2" onClick={ handleUpClick }>Convert to Uppercase</button>
                <button disabled={wordCount===0} className="btn btn-primary mx-3 my-2" onClick={ handleLoClick }>Convert to Lowercase</button>
                <button disabled={wordCount===0} className="btn btn-primary my-2" onClick={ clear }>Clear</button>
                <button disabled={wordCount===0} className="btn btn-primary mx-3 my-2" onClick={ handleCopy }>Copy</button>
                <button disabled={wordCount===0} className="btn btn-primary my-2" onClick={ handleExtraSpaces }>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{ wordCount } words and {text.length} characters</p>
                <p>{ 0.008 * wordCount } Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}

TextForm.prototype = {
    heading:PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading:'Set heading here',
}
