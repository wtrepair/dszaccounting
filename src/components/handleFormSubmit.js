// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaniMyBG8haYnSFhpaV0JAvVYFvzrCyvw",
  authDomain: "dineshcpa-49a43.firebaseapp.com",
  projectId: "dineshcpa-49a43",
  storageBucket: "dineshcpa-49a43.firebasestorage.app",
  messagingSenderId: "911939194965",
  appId: "1:911939194965:web:a50f405d4a3ed50581c4dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// handleForm.js
export const handleFormSubmit = (event) => {
  console.log("Form submitted");
  // Add your form handling logic here
  event.preventDefault();

  const first_name = event.target.elements.first_name.value;
  const last_name = event.target.elements.last_name.value;
  const email = event.target.elements.email.value;
  const phone = event.target.elements.phone.value;
  const country = event.target.elements.country.value;
  const language = event.target.elements.language.value;
  const message = event.target.elements.message.value;

  const data = {
    first_name,
    last_name,
    email,
    phone,
    country,
    language,
    message,
    timestamp: new Date().toISOString(),
  };
  console.log(data);

  // Create a reference to the location in the database where you want to store the data
  const userRef = ref(db, "Contact Form/" + first_name + " " + last_name);

  // Write data to this reference
  set(userRef, data)
    .then(() => {
      // alert("Form submitted successfully!");
      console.log("Form submitted successfully");
    })
    .catch((error) => {
      console.error("Error submitting form: ", error);
      alert("Error submitting form: " + error.message);
    });

  event.target.reset();
};
