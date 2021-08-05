import 'bootstrap-css-only';
import './App.css';
import Registro from "./componentes/Registro/Registro.jsx"
import Login from "./componentes/Login/Login.jsx"
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {

  return (

        <Router>

          <Route exact path="/" component={Registro} />

          <Route exact path="/registro" component={Registro} />

          <Route exact path="/login" component={Login} />



        </Router>);
    
}

export default App;
