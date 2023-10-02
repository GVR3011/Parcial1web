import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function Detail(){
    const params = useParams();
    return(
        <Card className="text-center" style={{ width: "18rem", height: "24rem" }}>
            <Card.Header>{params.nombre}</Card.Header>
            <Card.Body>
            <Card.Title>{params.fecha_cultivo}</Card.Title>
            <Card.Img
                    style={{ height: "14rem" }}
                    variant="top"
                    src={params.image}
                    />
            <Card.Text>{params.notas}</Card.Text>
            <Card.Text>{params.altura}</Card.Text>
            </Card.Body>
        </Card>
        );
    }
export default Detail;