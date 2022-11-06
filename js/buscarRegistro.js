import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";


    
export const getDetails = async (user) =>{
    const card = document.getElementById('cardInformacion');
    const docRef = doc(db, "DBusers",user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      
       
        console.log(docSnap.data())
        

      card.innerHTML=`
      <div class="card-header">
        <h2 class="card-title">${docSnap.data().nombres}</h2>
      </div>
      <div class="card-body">
        <p class="card-text">Email: ${docSnap.data().user}</p>
        
        <p class="card-text">Departamento: ${docSnap.data().Departamento}</p>
        <p class="card-text">Ciudad: ${docSnap.data().Ciudad}</p>
        <p class="card-text">Telefono: ${docSnap.data().celular}</p>
        <p class="card-text">Genero: ${docSnap.data().Genero}</p>
        <p class="card-text">RH: ${docSnap.data().Rh}</p>
      
      </div>
     
      `;
      } else {
        card.innerHTML=`
        <div >
          <h2 class="card-title">USUARIO NO ENCONTRADO</h2>
        </div>    
        `
      }
    
}

const formulario = document.getElementById("buscar");

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const email = document.getElementById('email');
    getDetails(email.value);
    
})
