import { registerUser } from "./firebase.js";//crear usuario
import { registerSetDoc } from "./firebase.js";//enviar los datos del usuario a la base de datos
import {validacion} from"../js/validaciones.js";

const form = document.getElementById("f1");

form.addEventListener('submit',(evento)=>{
    evento.preventDefault();


    

    const user = document.getElementById("email2");
    const pass = document.getElementById("password2");

    const user2 = document.getElementById("email");
    const pass2 = document.getElementById("password");


    const nombres = document.getElementById("name");
    const celular = document.getElementById("telefono");
    const Direccion = document.getElementById("direccion");
    const Rh = document.getElementById("rh");
    const Departamento = document.getElementById("departamentos");
    const Ciudad = document.getElementById("minucipios");
    const Genero = document.getElementById("genero");

        const validar= validacion(user.value,pass.value, user2.value,pass2.value,nombres.value,celular.value,Direccion.value,Rh.value,Departamento.value,Ciudad.value,Genero.value)
        if(validar==="OK"){
            registroAuth(user.value,pass.value,nombres.value,celular.value,Direccion.value,Rh.value,Departamento.value,Ciudad.value,Genero.value)
        

        }else{
            alert(validar)
        }

      

});

async function registroAuth(user,pass,nombres,celular,Direccion,Rh,Departamento,Ciudad,Genero){
    try{
        const registro = await registerUser(user, pass);
        console.log(registro)
        registerSetDoc(user,nombres,celular,Direccion,Rh,Departamento,Ciudad,Genero)
        
        alert("SI FUNCIONA!")
        form.reset();
    }
    catch (error){
        console.log(error.code)
    }
}