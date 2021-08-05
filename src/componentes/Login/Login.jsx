import { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import URL_BASE from "../../services/api";
import { onLoginAction } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

const Login = (props) => {

    const campoU = useRef(null);
    const campoP = useRef(null);
    const [datos, setDatos] = useState({ usuario: "", password: "" });
    const dispatch = useDispatch()
    const usuarioLogeado = useSelector(state => state.usuarioLogeado)

    const Capturo = e => {
        setDatos(
            {
                usuario: campoU.current.value,
                password: campoP.current.value
            });
    }

    const Ingresar = e => {
        e.preventDefault()
        if (datos.usuario !== "" || datos.password !== "") {
            return fetch(URL_BASE + "login.php",
                {
                    method: "POST",
                    body: JSON.stringify(datos)
                }
            )

            .catch(error => console.error('Error:', error))
            .then(response => {
            if(response.status === 200){
                console.log('Success:', response)                
                dispatch(onLoginAction(response))                
                //useHistory.push('/dashboard');
            }
            })
        } else {
            console.log("Los datos están vacíos.");
        }
    }

    return (
        <section className='d-flex flex-md justify-content-center login'>
                <div className='card'>
                    <section className='card-body'>
                    <h2>Welcome back!</h2>
                        <form>
                        {usuarioLogeado ? (
                            <div className='alert alert-success' role='alert'>
                                Inicio de session correcto
                            </div>
            ) : (
              ''
            )}
                            <input type='text' name='usuario' className='form-control' placeholder='Usuario' onChange={Capturo} ref={campoU}/>
                            <br/>
                            <input type='password' name='password' className='form-control' placeholder='Password' onChange={Capturo} ref={campoP}/>
                            <br/>
                            <button className='btn btn-success' id='login' onClick={Ingresar}>Login</button>
                            <Link className='mx-3' to='/registro'>Registrate!</Link>
                        </form>
                    </section>
                </div>
            </section>
    )
}

export default Login;