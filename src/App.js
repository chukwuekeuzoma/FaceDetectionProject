import React, { Component } from "react"
import Navigation from "./Components/Navigation/Navigation"
import Logo from "./Components/Logo/Logo"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm"
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition"
import Rank from "./Components/Rank/Rank"
import "./App.css"
import Particles from 'react-particles-js'
import Clarifai from "clarifai"
import Signin from "./Components/SignIn/Signin"
import Register from "./Components/Register/Register"

const app = new Clarifai.App({
  apiKey: '5ee1b0d7c14c495cad7b231be854cbb6'
 });

 const particlesOptions = () =>{
  return{
    particles:{
     number:{
       value: 30,
       density:{
         enable:true,
         value_area:800
       }
     }
    }
  }
} 

class App extends Component{
  
    state={
      input:"",
      imageUrl:"",
      box:{},
      route:"Signin",
    }
  
    calculateFaceLocation= (data) => {
    const clarifaiFace=(data.outputs[0].data.regions[0].region_info.bounding_box);
    var image = document.getElementById('inputimage');
    const width =  Number(image.width);
    const height = Number(image.height);
    console.log(width, height, clarifaiFace);
     return{
      toprow:clarifaiFace.top_row * height,
      rightcol: width - (clarifaiFace.right_col * width),
      bottomrow:height - (clarifaiFace.bottom_row * height),
      leftcol:clarifaiFace.left_col * width,
      }
    }

  showTheFaceBox = (box) =>{
    this.setState({
      box:box
    })
   
  }
  
  onInputChange = (e) =>{
     this.setState({
       input:e.target.value 
     })
  }
  
 
  onClickButton = () =>{
    this.setState({
      imageUrl:this.state.input
    })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(response => this.showTheFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
    }
    onRouteChange = (value) =>{
      this.setState({route:value})
    }
   render(){
  return (
    <div className="App">
      <Particles className="particles"
        params={particlesOptions} />
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      { this.state.route === "home"?
      <div>
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onClickButton={this.onClickButton}/>
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>:(
        this.state.route === "Signin"?
       <Signin onRouteChange={this.onRouteChange}/>:
       <Register onRouteChange={this.onRouteChange}/>
      )}

      
    </div>
  );
  }
}

export default App;
