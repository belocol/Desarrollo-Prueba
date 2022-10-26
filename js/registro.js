import { registerUser } from "./firebase.js";//crear usuario
import { registerSetDoc } from "./firebase.js";//enviar los datos del usuario a la base de datos

const form = document.getElementById("f1");

form.addEventListener('submit',(evento)=>{
    evento.preventDefault();

    const user = document.getElementById("email2");
    const pass = document.getElementById("password2");

    const nombres = document.getElementById("name");
    const celular = document.getElementById("telefono");
    const Direccion = document.getElementById("direccion");
    const Rh = document.getElementById("rh");
    const Departamento = document.getElementById("departamentos");
    const Ciudad = document.getElementById("minucipios");
    const Genero = document.getElementById("genero");

   
    registerSetDoc(user.value,nombres.value,celular.value,Direccion.value,Rh.value,Departamento.value,Ciudad.value,Genero.value);


    const registro = registerUser(user.value, pass.value);


    const validation =  registro;

    if (validation != null) {
        alert("User register succesfull: "+user.value);
        //window.location.href="login.html";
    }else{
        console.log("Error");
        alert("Error al Ingresar");
    }
    
    

    
    
    //form.reset();


});