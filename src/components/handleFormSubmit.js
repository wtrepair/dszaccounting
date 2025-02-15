// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaniMyBG8haYnSFhpaV0JAvVYFvzrCyvw",
  authDomain: "dineshcpa-49a43.firebaseapp.com",
  projectId: "dineshcpa-49a43",
  storageBucket: "dineshcpa-49a43.firebasestorage.app",
  messagingSenderId: "911939194965",
  appId: "1:911939194965:web:a50f405d4a3ed50581c4dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// handleForm.js
export const handleFormSubmit = (event) => {
    console.log("Form submitted");
    // Add your form handling logic here
    event.preventDefault();
  
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const phone = "+1"+document.getElementById("phone").value;
    const project_details = document.getElementById("project_details").value;
  
    const data = {
      first_name,
      last_name,
      city,
      email,
      phone,
      project_details,
    };
    console.log(data);
  
    // Create a reference to the location in the database where you want to store the data
    const userRef = ref(db, "Contact Form/" + first_name + " " + last_name);
  
    // Write data to this reference
    set(userRef, data)
      .then(() => {
        alert("Form submitted successfully!");
        console.log("Form submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting form: ", error);
        alert("Error submitting form: " + error.message);
      });
  
      event.target.reset();
  };