//1. Declarar el arreglo o array que se estira y se encoje

var dynamic_array = [1]

//2.Extraemos el id del div para guardarlo en una variable

var dynamic_div = document.getElementById ("estirar");

//3.Extraemos el boton
var accept_button=document.getElementById("anadir");
var delete_button=document.getElementById("quitar");

//4.Hacer que el valor inicial del array aparezca en la pantalla

function on_load() {
    dynamic_array.forEach(function (valor){
        
        var h3_number=document.createElement("h3"); 
        h3_number.innerHTML=valor;
        dynamic_div.appendChild(h3_number);
    
    })
}

function array_update (generic_array) {
    dynamic_div.innerHTML='';
    generic_array.forEach(function (valor){
        var h3_number=document.createElement("h3"); 
        h3_number.innerHTML=valor;
        dynamic_div.appendChild(h3_number);
    
    })

}

accept_button.addEventListener('click',function(){
    console.log('button working')
    dynamic_array.push(1);
    array_update(dynamic_array);  
})

delete_button.addEventListener('click',function(){
    dynamic_array.pop()
    array_update(dynamic_array);
})


on_load();