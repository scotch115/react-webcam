import React, { Component } from 'react';
import Webcam from 'react-webcam';
import './App.css';

class App extends Component {
	enableWebcam = () => this.setState({ webcamEnabled: true });
	switchCamera = () => {
		if (this.state.facingMode === "user") {
			this.setState({ facingMode: "environment" });
		} else if (this.state.facingMode === "environment") {
			this.setState({ facingMode: "user" });
		}
	}

	// webcamRef = () => React.useRef(null);
	// capture = () => React.useCallback(
  //   () => {
  //     const imageSrc = this.state.webcamRef.current.getScreenshot();
  //   },
  //   [this.state.webcamRef]
  // );

	constructor(props) {
		super(props);
		this.state = {
			webcamEnabled: false,
			facingMode: { exact: "user"}
		};
	}


	render() {
	  return (
	    <div className="App" style={{padding: 10}}>
				<div className="container has-text-centered">
					<div className="title">WebCam</div>
					<div className="box">
					<div> Click the button to enable your device's webcam within the browser! </div>
			      {this.state.webcamEnabled ? (
							<Webcam
								audio={false}
				        height={720}
				        // ref={this.webcamRef}
				        screenshotFormat="image/jpeg"
				        width={1280}
								videoConstraints={this.state.facingMode}
							 />
						) : (
							<button type="button" onClick={this.enableWebcam}>
							Enable Webcam
							</button>
						)}
						<br />
						<button className="has-text-centered" type="button" onClick={this.switchCamera}>
						Switch camera
						</button>
						<br />

					</div>
				</div>
	    </div>
	  );
	}
}

export default App;
