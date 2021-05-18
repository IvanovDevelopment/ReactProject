import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Nodes} from './components/Sidebar/Nodes';
import {Kernel} from './components/Sidebar/Kernel';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import NativeRenderer from "./components/Render"



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <div className="row">
        <div className = "col-md-3 m-2">
          <Switch>
            <Route path={'/nodes'} exact component={Nodes}/>
            <Route path={'/kernel'} component={Kernel}/>
          </Switch>
        </div>
        <div className = "col-md-6">
          <NativeRenderer></NativeRenderer>
        </div>
      </div>
      
      
    </BrowserRouter>
  );
}

export default App;
