import React from "react"
import "./ImageLinkForm.css"

const ImageLinkForm = ({onInputChange, onClickButton}) =>{
    return(
        <div>
        <p className="f3">{"This Magic brian will detect faces on pictures.. Give it a try"}</p>
         <div className="center">
           <div className="shadow-2 br3 pa4 center form">
                <input className="f4 w-70 center pa2 " type ="text" placeholder="Search iniside martins Brain....." 
                    onChange={onInputChange}
                />
                <button className="grow w-30 link ph3 pv2  white bg-light-purple "
                 onClick={onClickButton}
                >Detect</button>
            </div>
         </div>
          
        </div>
    )
}

export default ImageLinkForm;