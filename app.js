var btnTranslate =document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var txtOutput=document.querySelector("#txt-output")

var serverURL=""

function getFinalURL(text) {
   return serverURL +"?"+ "text" + text
}

function errorHandler(error){
   console.log("error occured",error);
   alert("please wait for a while there is an server issue");
}
 

function handleClick(){
   var inputText =txtInput.value

   fetch(getFinalURL(inputText))
   .then(response => response.json())
   .then(json => {
         var translatedText = json.contents.translated
         outputDiv.innerText= translatedText
   })
   .catch(errorHandler)
} 
   
   btnTranslate.addEventListener("click", handleClick)




    
