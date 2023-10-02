import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CardBody, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import imagen from './cafebanner.png';
import { useNavigate } from 'react-router-dom';
import "./login.css"
import { FormattedMessage } from 'react-intl';


function Login() {

    const [formValues, setFormValues] = useState({user:"", password:""})

    const handleUserChange = ((e) => {
        setFormValues({...formValues, user: e.target.value})
      });
     
    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
      });

    const navigate = useNavigate();

    const clickSubmit = (event) => {
            const valido = true;
            if (valido && handlePasswordChange.length > 0) {
                navigate('/home');
            }else{
                window.alert('Error de usuario');
            }
        };
  
  return (
    <div className = 'contenedor'>
        <div className='Banner'>
            <h1 className='title'>El aroma mágico</h1> 
            <hr></hr>
            <Row>
                <img src={imagen} fluid className="imagen" alt='imagen'></img> 
            </Row> 
        </div>
        <hr></hr>
        <div className='container h-100'>
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-8">
                    <div className="card border-dark">
                <Card>  
                    <Card.Header><FormattedMessage id="Inicio"/></Card.Header>
                    <CardBody>
                            <div className='col-md-6 offset-md-3 mt-1'>   
                                <Row>          
                                        <Form>
                                        <Form.Group className="col-md-6 offset-md-3 mt-1" controlId="formBasicEmail" >
                                            <Form.Label><FormattedMessage id="Usuario"/></Form.Label>
                                            <Form.Control type="email" onChange={handleUserChange} value={formValues.user}/>
                                        </Form.Group>

                                        <Form.Group className="col-md-6 offset-md-3 mt-1" controlId="formBasicPassword">
                                            <Form.Label><FormattedMessage id="Contraseña"/></Form.Label>
                                            <Form.Control type="password" onChange={handlePasswordChange} value={formValues.password}/>
                                            <div className='form-group d-flex justify-content-between mt-3'>
                                                <Button variant="success" onClick={clickSubmit}><FormattedMessage id="Boton"/></Button>{' '}                                
                                                <Button variant="danger"><FormattedMessage id="Cancelar"/></Button>{' '}
                                            </div>
                                        </Form.Group>
                                        </Form>
                                    </Row>
                                </div>
                    </CardBody>
                    <Card.Footer className="text-center text-muted mt-3"><FormattedMessage id="Contacto"/></Card.Footer>
                </Card>
                </div>
            </div> 
            </div> 
        </div>
    </div>
    );
    }

export default Login;