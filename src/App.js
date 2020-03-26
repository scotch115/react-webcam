import React, { Component } from 'react';
import Webcam from 'react-webcam';
import './App.css';

class App extends Component {
	enableWebcam = () => this.setState({ webcamEnabled: true });


	setRef = (webcam) => {
		this.webcam = webcam;
	}

	capture = () => {
      const imageSrc = this.webcam.getScreenshot();
			this.setState({
				imageData: imageSrc
			})
    }

	constructor(props) {
		super(props);
		this.state = {
			webcamEnabled: false,
			facingMode: "user",
			imageData: null
		};
	}


	render() {
		const videoConstraints = {
			width: 1280,
			height: 720,
			facingMode: this.state.facingMode
		}
	  return (
	    <div className="App" style={{padding: 10, background: 'linear-gradient(160deg, rgb(15, 32, 39, 1), rgb(32, 58, 67, 1), rgba(44, 83, 100, 1))', width: '100vw', height: '100vh'}}>
				<div className="container has-text-centered">
					<div className="title" style={{  color: 'white'}}>WebCam</div>
					<div className="container box">
					<div> Click the button to enable your device's webcam within the browser! </div>
					<br />
			      {this.state.webcamEnabled ? (
							<div>
								<Webcam
									audio={false}
					        height={720}
					        ref={this.setRef}
					        screenshotFormat="image/jpeg"
					        width={1280}
									mirrored="true"
									videoConstraints={videoConstraints}
								 />
								 <button className="has-text-centered button is-small is-rounded is-warning" type="button"onClick={()=> this.state.facingMode === "user" ? this.setState({ facingMode: "environment"}) : this.setState({facingMode: "user"})}>
	 	 						Switch camera
	 	 						</button>
								<br />
								<br />
	 	 						<button className="has-text-centered button is-small is-rounded is-link" type="button" onClick={this.capture}>
	 	 						Take a Screenshot!
	 	 						</button>
		 						{this.state.imageData ?
		 							<div>
		 								<p><img src={this.state.imageData} alt=""/></p>

		 							</div>
		 							: null
		 						}
							</div>
						) : (
							<button className="button is-small is-rounded is-info" type="button" onClick={this.enableWebcam}>
							Enable Webcam
							</button>
						)}
					</div>
				</div>
	    </div>
	  );
	}
}

export default App;
