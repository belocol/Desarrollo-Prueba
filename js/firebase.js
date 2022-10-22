// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
//metodo para el ingreso de usuarios
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
//metodo para usar los servicios de Firestore
import { getFirestore, collection, addDoc, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';


const firebaseConfig = {
  apiKey: "AIzaSyBd3wevdZJUAFVRTOSGuO5CVsmGVTA-P9U",
  authDomain: "desarrollonube-639fd.firebaseapp.com",
  databaseURL: "https://desarrollonube-639fd-default-rtdb.firebaseio.com",
  projectId: "desarrollonube-639fd",
  storageBucket: "desarrollonube-639fd.appspot.com",
  messagingSenderId: "886143206382",
  appId: "1:886143206382:web:737f9fc4439de0b042c4ff"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Autentication Login
const auth = getAuth();
// Initialize Firestore
const db = getFirestore(app);

export const loginValidation = (email,password) => signInWithEmailAndPassword(auth, email, password)

export const registerUser = (email,password) => createUserWithEmailAndPassword(auth, email, password)


export const registerAddDoc = (user,nombres,celular,Direccion,Rh,Departamento,Ciudad,Genero) => {
  addDoc(collection(db, "users"),{
    user,
    nombres,
    celular,
    Direccion,  
    Rh,
    Departamento,
    Ciudad,
    Genero
  })

}

export const registerSetDoc = (user,nombres,celular,Direccion,Rh,Departamento,Ciudad,Genero) => {
  setDoc(doc(db, "DBusers", user),{
    nombres,
    celular,
    Direccion,  
    Rh,
    Departamento,
    Ciudad,
    Genero
  })

}