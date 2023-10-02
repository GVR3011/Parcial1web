import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cafe from "./cafe";
import imagen from './cafebanner.png';
import "./login.css"
import { Container } from "react-bootstrap";
import Detail from "./detail";

const { useEffect, useState } = require("react");

function Home() {
const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3001/cafes"; 

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCafes(data);
      })
      .catch((error) => {
        console.error("No se encontro la información:", error);
      });
  }, []);

return (
    <div className = 'contenedor'>
        <div className='Banner'>
            <h1 className="title">El aroma mágico</h1> 
            <hr></hr>
            <Row>
                <img src={imagen} className='Cafe' alt='cafe'></img> 
            </Row> 
            <hr></hr>
        </div>
        <Container fluid>
            <Row>
                <Col>
                {cafes.map((cafe) => (
                    <Cafe key={cafe.id} cafe={cafe}>
                    </Cafe>
                ))}
                </Col>
                <Col className="right-column">
                    <Detail cafe={cafes}></Detail>
                </Col>
            </Row>
        </Container>
    </div>
);
}
export default Home;
                