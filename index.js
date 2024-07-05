let chiffre=document.querySelectorAll(".chiffre");
let ecran=document.querySelector('#ec');
let egal=document.querySelector("#eq");
let effacer=document.querySelector("#c");
let on=document.querySelector('#on');
let off=document.querySelector('#off');

chiffre.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        ecran.textContent+=e.target.id
    })
})
egal.addEventListener('click',()=>{
    ecran.textContent=eval(ecran.textContent);
})
effacer.addEventListener('click',()=>{
    ecran.textContent=" "
})
off.addEventListener('click',()=>{
    ecran.style.background="black"  
})
on.addEventListener('click',()=>{
    ecran.style.background="white" 
})
