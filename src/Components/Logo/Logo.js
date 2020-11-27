import React from "react"
import Tilt from 'react-tilt'
import "./logo.css"
import brain from "./brian-diagram.png"
const Logo = ()=>{
    return(
      <div className="ma4 nto">
      <Tilt className="Tilt br2 shadow-2 br3" options={{ max :80 }} style={{ height: 150, width: 150 }} >
           <div className="Tilt-inner"><img src ={brain} alt=""/></div>
       </Tilt>
    </div>
    )
}

export default Logo;