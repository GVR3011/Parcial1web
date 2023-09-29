import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CardBody, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';



function Login() {

    const [formValues, setFormValues] = useState({user:"", password:""})

    const handleUserChange = ((e) => {
        setFormValues({...formValues, user: e.target.value})
      });
     
    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
      });

      const clickSubmit = (event) => {};
    //     event.preventDefault(); 
    //     // Realizar la solicitud POST usando fetch
    //     fetch('https://ejemplo.com/api/endpoint', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formValues),
    //     })
    //       .then(response => response.json())
    //       .then(responseData => {
    //         // ¡¡¡Hacer algo con la respuesta si es necesario!!!
    //         console.log(responseData);
    //       })
    //       .catch(error => {
    //         // Manejar errores de la solicitud
    //         console.error('Error:', error);
    //       });
    //   };
  
  return (
    <div className = 'contenedor'>
        < div className='Banner'>
            <h1>El aroma mágico</h1> 
            <hr></hr>
            <Row>
                <img src='cafebanner.png' fluid className='Cafe' alt='cafe'></img> 
            </Row> 
        </div>
        <div className='Login'>
            <Card>  
                <Card.Header>Iniciar sesión</Card.Header>
                <CardBody>       
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese Usuario" onChange={handleUserChange} value={formValues.user}/>
                        <Form.Text className="text-muted">
                        No se compartirá su usuario.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" onChange={handlePasswordChange} value={formValues.password}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ingresar
                    </Button>
                    <Button variant="primary" type="submit">
                        Cancelar
                    </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    </div>
    );
    }

export default Login;