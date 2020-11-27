import React from "react"
import "./Face.css"

const FaceRecognition = ({imageUrl, box}) =>{
    return(
        <div className="center ma">
          <div className="absolute mt2">
            <img id="inputimage" src={imageUrl} alt="mart" width="500px" height="auto"/>
            <div className="bounding-box" style ={{top:box.toprow, right:box.rightcol, bottom:box.bottomrow, left:box.leftcol}}>

            </div>
          </div>
            
        </div>
    )
}
 
export default FaceRecognition