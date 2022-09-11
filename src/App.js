import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect, useState, useRef } from 'react';
import { VolumeDown, PlayCircle } from 'react-bootstrap-icons';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const trackRef = useRef(null);
  const playButtonRef = useRef(null);
  var isPlaying = false;

  useEffect(() => {
    const track = trackRef.current;
    const playButton = playButtonRef.current;
    console.log(track);

    playButton.addEventListener("click", () => {
      if (isPlaying) {
        track.pause();
        isPlaying = false;
      } else {
        track.play();
        isPlaying = true;
      }
    })
  }, []);

  return (
    <div className="App">
      <Container className="home">
        <Row className="radio-player">
          <h1>Fox Pad v2</h1>
          <audio ref={trackRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" id="stream"></audio>
          <Col sm={12} lg={4}>
            <Row>
              <Container>
                <Button ref={playButtonRef} name="play-pause" className="play-pause-button" aria-label="Play/pause">
                  <PlayCircle />
                </Button>
              </Container>
            </Row>
          </Col>
          <Col sm={12} lg={8} className="player-controls">
            <Row>
              <Container>
                <span className="currently-playing-label">Now playing on Some Radio Station</span>
                <br></br>
                <span className="currently-playing-title">Listen to Some Radio Station</span>
              </Container>
            </Row>
            <Row>
              <Container>
                <Button name="mute" className="mute-button" aria-label="Mute/unmute">
                  <VolumeDown />
                </Button>
                <input type="range" name="volume" className="volume" min="0" max="1" step="0.05" value="0.2" aria-label="Volume"></input>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
