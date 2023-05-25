// const firebaseConfig = {
//     apiKey: "AIzaSyA4OheFWxRPbpY4p2sHv3TbACHGvrNNOM0",
//     authDomain: "updated-portfolio-bcf10.firebaseapp.com",
//     databaseURL: "https://updated-portfolio-bcf10-default-rtdb.firebaseio.com",
//     projectId: "updated-portfolio-bcf10",
//     storageBucket: "updated-portfolio-bcf10.appspot.com",
//     messagingSenderId: "920061005597",
//     appId: "1:920061005597:web:3f30e27c9ee51275391bf4"
//   };
  
//   // initialize firebase
//   firebase.initializeApp(firebaseConfig);
  
//   // reference your database
//   var contactFormDB = firebase.database().ref("contact-form");
  
//   document.getElementById("contact-form").addEventListener("submit", submitForm);
  
//   function submitForm(e) {
//     e.preventDefault();
  
//     var name = getElementVal("name");
//     var email = getElementVal("email");
//     var msgContent = getElementVal("msgContent");
  
//     saveMessages(name, email, msgContent);
  
//     //   enable alert
//     document.querySelector(".alert").style.display = "block";
  
//     //   remove the alert
//     setTimeout(() => {
//       document.querySelector(".alert").style.display = "none";
//     }, 3000);
  
//     //   reset the form
//     document.getElementById("contact-form").reset();
//   }
  
//   const saveMessages = (name, email, msgContent) => {
//     var newContactForm = contactFormDB.push();
  
//     newContactForm.set({
//       name: name,
//       email: email,
//       msgContent: msgContent,
//     });
//   };
  
//   const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA4OheFWxRPbpY4p2sHv3TbACHGvrNNOM0",
    authDomain: "updated-portfolio-bcf10.firebaseapp.com",
    databaseURL: "https://updated-portfolio-bcf10-default-rtdb.firebaseio.com",
    projectId: "updated-portfolio-bcf10",
    storageBucket: "updated-portfolio-bcf10.appspot.com",
    messagingSenderId: "920061005597",
    appId: "1:920061005597:web:3f30e27c9ee51275391bf4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
