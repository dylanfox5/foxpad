import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect, useState, useRef } from 'react';
import { VolumeDown, PlayCircle, PauseCircle } from 'react-bootstrap-icons';

function AudioPlayer() {
  const trackRef = useRef(null);
  const volumeControlRef = useRef(null);
  const playCircleRef = useRef(null);
  const pauseCircleRef = useRef(null);
  var isPlaying = false;
  var isMuted = false;
  var currentVolume = 0.2;

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000)
  }, [loading])

  const togglePlay = () => {
    const track = trackRef.current;
    track.volume = currentVolume;

    const playCircle = playCircleRef.current;
    const pauseCircle = pauseCircleRef.current;
    playCircle.removeAttribute("class");
    pauseCircle.removeAttribute("class");

    if (isPlaying) {
      track.pause();
      pauseCircle.classList.add("hide");
      playCircle.classList.add("show");
    } else {
      track.play();
      pauseCircle.classList.add("show");
      playCircle.classList.add("hide");
    }
    isPlaying = !isPlaying;
  }

  const toggleMute = () => {
    const track = trackRef.current;

    if (isMuted) {
      track.volume = currentVolume;
    } else {
      track.volume = 0;
    }
    isMuted = !isMuted;
  }

  const handleVolume = () => {
    const volumeControl = volumeControlRef.current;
    const track = trackRef.current;
    const vol = volumeControl.value;

    track.volume = currentVolume = vol;
    currentVolume = vol;
  }

  return (
    <>
      <Col sm={12} lg={4}>
        <audio ref={trackRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" id="stream"></audio>
        <Row>
          <Container>
            <Button name="play-pause" className="play-pause-button" aria-label="Play/pause" onClick={togglePlay}>
              <PlayCircle ref={playCircleRef} id="playIcon" className="show" />
              <PauseCircle ref={pauseCircleRef} id="pauseIcon" className="hide" />
            </Button>
          </Container>
        </Row>
      </Col>
      <Col sm={12} lg={8} className="player-controls">
        <Row>
          <Container>
            <span className="currently-playing-label">Now playing Some Random Tune</span>
            <br></br>
            <span className="currently-playing-title">Listen to Some Random Tune</span>
          </Container>
        </Row>
        <Row>
          <Container>
            <Button name="mute" className="mute-button" aria-label="Mute/unmute" onClick={toggleMute}>
              <VolumeDown />
            </Button>
            <input ref={volumeControlRef} type="range" name="volume" className="volume" min="0" max="1" step="0.05" defaultValue="0.2" aria-label="Volume" onChange={handleVolume}></input>
          </Container>
        </Row>
      </Col>
    </>
  );
}

export default AudioPlayer;
