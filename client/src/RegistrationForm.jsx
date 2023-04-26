import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
// import { Axios } from 'axios';
import './RegistrationForm.css';
import RegistrationForm2 from './RegistrationForm2';

// import {fill} from "@cloudinary/url-gen/actions/resize";
// import {CloudinaryImage} from '@cloudinary/url-gen';


function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [section, setSection] = useState('');
  const [rollnumber, setRollnumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  function validateFormData(formData) {
    const { name, email, branch, section, rollnumber, phoneNumber } = formData;

    if (name && email && branch && section && rollnumber && phoneNumber) {
       navigate(`/RegistrationForm2`);
    }else{
      return 'Please fill out all required fields.';
    }

    if (name.length < 2 || name.length > 50) {
      return 'Invalid Name';
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

      //image upload cloudinary

    
  

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = { name, email, branch, section, rollnumber, phoneNumber };
    const errorMessage = validateFormData(formData);

    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }

    try {
      await axios.post('http://registration-ted-form-registration-ted-form.up.railway.app/register', formData);
      alert('User registered successfully.');
    } catch (err) {
      console.error(err);
      setErrorMessage('An error occurred while processing your request.');
    }
  }

  return (
    
    <>
    <div className="registration-form-container">
      <center> <h1 id="rf" >Registration Form</h1> </center>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch:</label>
          <input type="text" id="branch" name="branch" value={branch} onChange={(event) => setBranch(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input type="text" id="section" name="section" value={section} onChange={(event) => setSection(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="rollNumber">Roll number:</label>
          <input
          type="text"
          id="rollNumber"
          name="rollNumber"
          value={rollnumber}
          onChange={(event) => setRollnumber(event.target.value)}
        />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
     
      
        <div className="form-group">
            <center> <button type="submit">Register </button> </center>
        </div>
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
</>
    
  );
}

export default RegistrationForm;


