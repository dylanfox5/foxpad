import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from './Loading';
import AudioPlayer from './AudioPlayer';

import { useEffect, useState, useRef } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000)
  }, [loading])

  return (
    <>
      {!loading ? (
        <div className="App animate__animated animate__fadeIn">
          <Container className="home">
            <Row>
              <h1>Fox Pad v2</h1>
              <AudioPlayer />
            </Row>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
