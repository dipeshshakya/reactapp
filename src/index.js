import React from 'react'
import ReactDOM from 'react-dom'

// let name = 'DIPESH'
// let obj = {
// 	fname:'dipesh',
// 	lname:'shakya'

// }

// const element =  <h1>Hello, {obj.fname} {obj.lname}!</h1>


// function cartoon(name="dipesh"){
// 	return <h1>cartoon{name}</h1>
// }
let clock =function(){
	return <h2>{new Date().toLocaleTimeString()}</h2>
}

setInterval(function(){

	ReactDOM.render(
	  // element,
	  // cartoon(),
	  clock(),
	  document.getElementById('root')
	);


},1000)