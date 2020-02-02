import React from 'react';
import './App.css';
import '../assets/bootstrap.min.css'
import {Header, Footer} from '../components'
import routes from '../Routes/routes'
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     	<BrowserRouter>
     		<Route path="/:lang" component={Header}/>
		    <div className="mainPart">
			     		{routes}
		    </div>	
     		<Route path="/:lang" component={Footer}/>
     	</BrowserRouter>		
    </div>
  );
}

export default App;
