import React from 'react';
//import React, { useState } from 'react';
//import Header from './Header';
import './global.css';

import Routes from './routes';

function App() {
	return(
		<Routes />
	);

	/*const [counter, setCounter]  = useState(0);
	function increment(){
		setCounter(counter + 1);
	}
	return (
		<div>
			<Header title="Semana OmniStack" >Contador: {counter}</Header>
			<button onClick={increment}>Incrementar</button>
		</div>
	);*/
}

export default App;
