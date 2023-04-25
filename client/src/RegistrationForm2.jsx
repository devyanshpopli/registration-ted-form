import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm2.css';
import img2 from './Images/Payment.jpeg';

function RegistrationForm2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [section, setSection] = useState('');
  const [rollnumber, setRollnumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [image,setImage] = useState('');

  function validateFormData(formData) {
    const { name, email, branch, section, rollnumber, phoneNumber } = formData;

    if (!name || !email || !branch || !section || !rollnumber || !phoneNumber) {
      return 'All fields are required.';
    }

    if (name.length < 2 || name.length > 50) {
      return 'Name must be between 2 and 50 characters long.';
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return 'Invalid email address.';
    }

    if (branch.length < 2 || branch.length > 20) {
      return 'Branch must be between 2 and 20 characters long.';
    }

    if (section.length < 1 || section.length > 10) {
      return 'Section must be between 1 and 10 characters long.';
    }

    if (!/^[0-9]+$/.test(rollnumber)) {
      return 'Roll number must be a number.';
    }

    if (!/^[0-9]+$/.test(phoneNumber)) {
      return 'Phone number must be a number.';
    }

    return null;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // const formData = { name, email, branch, section, rollnumber, phoneNumber };
    // const errorMessage = validateFormData(formData);

    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }

    try {
      await axios.post('http://localhost:5000/register');
      alert('User registered successfully.');
    } catch (err) {
      console.error(err);
      setErrorMessage('An error occurred while processing your request.');
    }
  }
  //image upload cloudinary
  const uploadImage=() =>{
    const formData = new FormData();
    formData.append("file",image)
    formData.append("upload_preset","tedxkiet")

    axios.post(
      "https://api.cloudinary.com/v1_1/drjp31htt/image/upload",
      formData
      ).then((response)=>{
      console.log(response);
    });
  };

  return (
    
    <div className="registration-form-container">
      <center> <h1 id="rf">Payment Gateway</h1></center>
      <form className="registration-form">
        <div id="payimage">
        <center> <img src={img2} width="350px" height="350px"/> </center>
        </div>
       <center>  <p> PHONE NO. -  +91 99976 46831</p> </center>
       
        
        <div className="form-group">
          <center> <label htmlFor="phoneNumber">Submit Payment Screenshot:</label> </center>
          <center><input
            type="file"
            onChange={(event) => setImage(event.target.files[0])}
          /> </center>
          <button type="submit" onClick={uploadImage}>Upload Image</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default RegistrationForm2;

