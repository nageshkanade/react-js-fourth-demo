import logo from './logo.svg';
import './App.css';
import Routers from './container/pages/Routers';
// import Home from './container/pages/Home';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
const App=()=> {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routers/>
    </div>
  );
}

export default App;
