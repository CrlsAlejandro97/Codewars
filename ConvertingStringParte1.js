const message = "the-stealth-warrior"

function convertString (message){
  result = message.replaceAll("-"," ").split(" ")
  console.log(result)
  message=""
  for(i=0;i<result.length;i++){
    result[i]=result[i].replace(result[i][0],result[i][0].toUpperCase())
    message+=result[i]
  }
  
  console.log(message)
}
convertString(message)