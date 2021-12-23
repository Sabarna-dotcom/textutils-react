import React from "react";

export default function About(props) {

    let myStyle = {
      color: props.mode === 'dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'#042743':'white',
      border: '2px solid',
      borderColor: props.mode === 'dark'?'white':'#042743'
    }
    
    return (
    <>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>About</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}>Analyze your text</button>
            </h2>
            <div id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count , character count and many more.</strong>
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
                style={myStyle}>
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>TextUtils is a free tool that provide instant text analysis for free. Thus it is suitable to write paragraph with word/character limit.</strong>
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
                style={myStyle}>
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>It works on any browser and it is able to analyze any kind of text.</strong>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
    );
}
