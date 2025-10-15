
const weight_input=document.getElementById("weight_input");
const check_weight=document.getElementById("check_weight");

const removed_input=document.getElementById("removed_input");
const removed_weight=document.getElementById("removed_weight");

document.addEventListener("DOMContentLoaded",()=>{
    weight_input.value='';
    removed_input.value=''
})

check_weight.addEventListener('click',(e)=>{
    console.log(weight_input.value);
    if(parseInt(weight_input.value)>15){
        alert("Weight shoxuldnt be more than 15 kgs");
        removed_weight.style.display='inline-block';
        document.getElementById("success-btn").style.display='none'
    }
    else{
        document.getElementById("success-btn").style.display='block';
    }
})

removed_weight.addEventListener('click',(e)=>{
    console.log(removed_input.value);
    if(parseInt(removed_input.value )> weight_input.value){
        weight_input.value=0;
    }
    else{
        weight_input.value=parseInt(weight_input.value)- parseInt(removed_input.value)
    }
    removed_input.value='';
    removed_weight.style.display='none'    
})
