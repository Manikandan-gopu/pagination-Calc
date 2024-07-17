
document.addEventListener("DOMContentLoaded",()=>{
const display = document.querySelector(".display")
const container = document.querySelector("#container")
container.addEventListener("click",(e)=>{
if(e.target.classList.contains("btn")){
    const value = e.target.textContent;

    if(value==="C"){
        display.value = " ";
    }else if(value=== "="){
        try{
            display.value = eval(display.value)
        }catch{
            display.value="Error"
        
        }
    }else{
            display.value += value
        }
    }
})
});
