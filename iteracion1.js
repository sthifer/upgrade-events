//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

let btnToClick = document.querySelector('button[id="btnToClick"]');

btnToClick.addEventListener('click',function(event){
    console.log(`Se ha hecho ${event.type} en el botón`)
})
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let inFocus = document.querySelector('input[class="focus"]');
inFocus.addEventListener('focus',function(event){
    console.log(`Se ha hecho ${event.type} en el input. Valor ${inFocus.value}`)
})
//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let ininput = document.querySelector('input[class="value"]');

ininput.addEventListener('input',function(event){
    console.log(`Se ha hecho ${event.type} en el input. Valor ${ininput.value}`)
})