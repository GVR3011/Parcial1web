import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cafe from "./cafe";
import imagen from './cafebanner.png';

const { useEffect, useState } = require("react");

function Home() {
    const [home, setHomes] = useState([]);
    useEffect(() => {
    const URL =
        "https://raw.githubusercontent.com/GVR3011/Parcial1web/main/datoscaf.json";
    fetch(URL)
        .then((data) => data.json())
        .then((data) => {
        setHomes(data);
        });
    }, []);

return (
    <div className = 'contenedor'>
        <div className='Banner'>
            <h1>El aroma mágico</h1> 
            <hr></hr>
            <Row>
                <img src={imagen} className='Cafe' alt='cafe'></img> 
            </Row> 
        </div>
        <div className="Listado">
                {home.map((cafe) => (
                <Col key={cafe.id} className="mb-4">
                    <Cafe cafe={cafe} />
                </Col>
                ))}
        </div>
    </div>
);
}
export default Home;
                