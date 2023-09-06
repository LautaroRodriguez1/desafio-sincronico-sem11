document.addEventListener("DOMContentLoaded", ()=>{
const formulario = document.getElementById("formulario");
const Btnsub = document.getElementById("botons");
const endpoint = "https://jsonplaceholder.typicode.com/users"
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value; 
const FechadeN = document.getElementById("fechaden").value;


Btnsub.addEventListener("click", (fun)=>{
fun.preventDefault();
const DatosdelFormulario ={
nombre: nombre,
apellido: apellido,
fechadenas: FechadeN,
}
JSON.stringify(DatosdelFormulario);
console.log(JSON.stringify(DatosdelFormulario));
})


fetch(endpoint, DatosdelFormulario)
  .then(response => {
    if (!response.ok) {
      throw new Error(`La solicitud falló con estado: ${response.status}`);
    }
    return response.json(); 
  })
  .then(responseData => {
    console.log('Respuesta del servidor:', responseData);


});

});