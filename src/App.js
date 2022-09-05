import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Play, VolumeDown, PlayCircle } from 'react-bootstrap-icons';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container className="home">
        <Row className="radio-player">
          <h1>Fox Pad v2</h1>
          <audio src="" id="stream"></audio>
          <Col sm={12} lg={4}>
            <Row>
              <Container>
                <Button name="play-pause" className="play-pause-button" aria-label="Play/pause">
                  <PlayCircle />
                </Button>
              </Container>
            </Row>
          </Col>
          <Col sm={12} lg={8} className="player-controls">
            <Row>
              <Container>
                <span class="currently-playing-label">Now playing on Some Radio Station</span>
                <br></br>
                <span class="currently-playing-title">Listen to Some Radio Station</span>
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
