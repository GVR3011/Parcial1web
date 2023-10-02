import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';

function Cafe(props) {
    return(

        <Table>
                <thead className="thead-dark">
                    <tr className="text-center table-cell">
                        <th className="text-center table-cell">
                            #
                        </th>
                        <th className="text-center table-cell"><FormattedMessage id="Nombre"/></th>
                        <th className="text-center table-cell"><FormattedMessage id="Tipo"/></th>
                        <th className="text-center table-cell"><FormattedMessage id="Region"/></th>
                        </tr>
                </thead>
                <tbody>
                    <tr className="text-center table-cell">
                        <td className="text-center table-cell">
                            <Link to={"/home/" + props.cafe.id}>
                             {props.cafe.id}
                             </Link>
                             </td>
                        <td className="text-center table-cell">{props.cafe.nombre}</td>
                        <td className="text-center table-cell">{props.cafe.tipo}</td>
                        <td className="text-center table-cell">{props.cafe.region}</td>
                    </tr>
                </tbody>
            </Table>
    );
}
export default Cafe;