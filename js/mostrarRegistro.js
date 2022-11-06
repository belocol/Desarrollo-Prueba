import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";


const querySnapshot = await getDocs(collection(db, "DBusers"));

const tabla = document.getElementById('cuerpoTabla');

querySnapshot.forEach((doc) => {
    const row = tabla.insertRow();
    const registros = doc.data();
    row.innerHTML= `
    <tr>
        <td scope="row">${registros.nombres}</td>
        <td >${registros.user}</td>
        <td >${registros.Genero}</td>
        <td >${registros.celular}</td>
        <td >${registros.Rh}</td>
        <td >${registros.Departamento}</td>
        <td >${registros.Ciudad}</td>
    </tr>
    `;
  
});