import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function Cafe(props) {
    return(
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>
                        <Link to={"/home/" + props.cafe.id}>
                        #
                        </Link>
                    </th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{props.cafe.id}</td>
                    <td>{props.cafe.nombre}</td>
                    <td>{props.cafe.tipo}</td>
                    <td>{props.cafe.region}</td>
                    </tr>
                </tbody>
            </Table>
    );
}
export default Cafe;