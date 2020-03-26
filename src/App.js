import React, { Component } from 'react';
import Webcam from 'react-webcam';
import './App.css';
import ScrollIntoView from 'react-scroll-into-view';

class App extends Component {
	enableWebcam = () => {
		this.setState({ webcamEnabled: true })
	}


	setRef = (webcam) => {
		this.webcam = webcam;
	}

	capture = () => {
      const imageSrc = this.webcam.getScreenshot();
			this.setState({
				imageData: imageSrc
			});
    }

	popup = () => {
			window.open(this.state.imageData, 'Image, width=200px, height=150px, resizeable=1');
	}



	constructor(props) {
		super(props);
		this.state = {
			webcamEnabled: false,
			facingMode: "user",
			imageData: null,
			mirrored: "true"
		};
	}


	render() {
		const videoConstraints = {
			width: 1280,
			height: 720,
			facingMode: this.state.facingMode
		}
	  return (
	    <div className="App" style={{padding: 10, background: 'linear-gradient(160deg, rgb(15, 32, 39, 1), rgb(32, 58, 67, 1), rgba(44, 83, 100, 1))', width: '100vw', height: '100%', minHeight: '100vh'}}>
				<div className="container has-text-centered">
					<div className="title" style={{  color: 'white'}}>WebCam</div>
					<div className="container box" >
					<div> Click the button to enable your device's webcam within the browser! </div>
					<br />
					<div id="box">
			      {this.state.webcamEnabled ? (
							<div>
								<Webcam
									audio={false}
					        height={720}
					        ref={this.setRef}
					        screenshotFormat="image/jpeg"
					        width={1280}
									mirrored={this.mirrored}
									videoConstraints={videoConstraints}
								 />
								 <button className="has-text-centered button is-small is-rounded is-link" style={{position: "relative", top: '-80px'}} type="button" onClick={this.capture}>
 	 	 						Take a Picture
 	 	 						</button>
								<br />
								 <button className="has-text-centered button is-small is-rounded is-warning" style={{ position: "relative", top: '-68px' }} type="button"onClick={()=> this.state.facingMode === "user" ?
								 this.setState({ facingMode: "environment", mirrored: "false"})
								 : this.setState({facingMode: "user", mirrored: "true"})}>
	 	 						Switch Camera
	 	 						</button>
								<br />
		 						{this.state.imageData ?
		 							<div>
		 								<button className="button is-rounded is-small is-danger" style={{position: "relative", top: '-250px'}} onClick={this.popup}> Show Image </button>
		 							</div>
		 							: null
		 						}
							</div>
						) : (
							<ScrollIntoView selector="#box">
								<button className="button is-small is-rounded is-info" type="button" onClick={this.enableWebcam}>
								Enable Camera Access
								</button>
							</ScrollIntoView>
						)}
					</div>
				</div>
					<footer className="hero-foot" style={{position: "relative", bottom: '0vh'}}>
					 <div className="content has-text-centered" style={{color: "white"}}>
						Made with <i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "grey"}}></i> in Orlando
					 <div className=" content has-text-centered">
						 <a href="https://bulma.io">
						 <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24" />
						 </a>
					 </div>
					 </div>
					</footer>
				</div>
	    </div>
	  );
	}
}

export default App;
