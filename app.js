var btnTranslate =document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var txtOutput=document.querySelector("#txt-output")
 

function handleClick(){
 txtOutput.innerText="abcd "+txtInput.value;
}    
   
   btnTranslate.addEventListener("click", handleClick)




    
