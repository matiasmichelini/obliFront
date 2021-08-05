import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import URL_BASE from "../../services/api";

const Registro = () => {
  const campoU = useRef(null);
  const campoP = useRef(null);
  const [datos, setDatos] = useState({ usuario: "", password: "" });

  const validar = () => {
    setDatos({
      usuario: campoU.current.value,
      password: campoP.current.value,
    });
  };

  const registrarse = () => {
    console.log({ datos });
    if (datos.usuario === "" || datos.password === "") {      
      alert('Rellene los campos para continuar')
    } else if(datos.usuario.length < 5){
      alert('El usuario debe contener un largo minimo de 5 caracteres')
    }/* else if(){
      alert('El usuario debe contener una mayuscula')
    } */  
    else {
        return fetch(URL_BASE + "usuarios.php", {
        method: "POST",
        body: JSON.stringify(datos),
      })
        .catch(error => console.error('Error:', error))
        .then(response => {
          if(response.status === 200){
            console.log('Success:', response)
            alert('Registrado')
          }
          }); 
    }
  };

  return (
    <div className="d-flex flex-md justify-content-center login">
      <div className="card">
        <Form className="card-body">
          <h2 className="centrar">Registrate aqui</h2>
          <Form.Group controlId="username">
            <Form.Control
              type="text"
              placeholder="Usuario"
              onChange={validar}
              ref={campoU}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={validar}
              ref={campoP}
            />
          </Form.Group>
          <Button className='btn btn-success' id="registro" onClick={registrarse}>
            Registrarse
          </Button>
          <Link className="centrar" to="/login" >¿Ya estás registrado?</Link>
        </Form>
      </div>
    </div>
  );}

export default Registro;
