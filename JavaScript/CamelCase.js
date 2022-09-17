const message = "the--stealth-warrior"

function convertString (message){
 //1.todo lo que NO sea letra se reemplaza por " "|2.Todos los blancos por 1 blanco|3. La primer letra por mayuscula
 message = message.replace(/\W/gi, " ").replace(/\s+/," ").replace(/\b[a-z]/gi,letra => letra.toUpperCase() )
 console.log(message)
  }

convertString(message)
