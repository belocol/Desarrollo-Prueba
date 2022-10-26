export function validacion(user,pass, user2,pass2,nombres,celular,Direccion,Rh,Departamento,Ciudad,Genero){
   
       //var expresionEmail = /\w+@\w+.+[a-z]/;
       var expresionNombres= /^[a-z ,.'-]+$/i;
       var expresionNumIdentidad =/^\d{8,10}$/;
       //var expresionpassword= /^(?=.\d)(?=.[a-záéíóúüñ]).[A-ZÁÉÍÓÚÜÑ]/;
       var expresionesemail= /^\w+([.-]?\w+).(?:|com|es)/;
  

   if(user==""||user2==""||pass==""||pass2==""||Direccion==""|| Rh==""||Departamento==""|| Ciudad==""|| Genero=="" || nombres==""|| celular=="") {
       return "Por favor rellene todos los campos" ;
   }
   if(user.length == 0 ||user2.length == 0 ) {
       return 'No has escrito nada en el Email';
   }
   if(pass.length == 0) {
       return 'No has escrito nada en la contraseña';
   }
   if(pass2.length == 0) {
       return 'No has escrito nada en la confirmacion de la contraseña';
   }

   if(!expresionNombres.test(nombres)){
       return 'Ingrese un nombre valido';
   }
   if(!expresionNumIdentidad.test(celular)){
       return 'Numero de telefono invalido';
   }
   if(!expresionesemail.test(user)){
       return 'Ingrese un correo valido';
   }
   if(user != user2){
       return 'Los correos no coinciden';
   }

   if(pass!=pass2){
       return 'Los contraseñas no coinciden';

   }
   return "OK"
}