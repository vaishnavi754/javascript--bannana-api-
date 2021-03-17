var btnTranslate =document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
 
  console.log(txtInput)

function handleClick(){
    console.log(" button clicked fuction is called")
    console.log("input", txtInput.value)
}    
   
   btnTranslate.addEventListener("click", handleClick)




    
