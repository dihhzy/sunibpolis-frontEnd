import React, { useState, ChangeEvent, FormEvent } from 'react';
import './RegisternLogin.css';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

export function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    age: '',
  });

  // Explicitly specify the type for the event parameter
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Explicitly specify the type for the event parameter
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7234/api/User/api/User/register', {
        userName: formData.username,
        userEmail: formData.email,
        userPhoneNumber: formData.phone,
        userPassword: formData.password,
        userAge: parseInt(formData.age, 10),
      });

      console.log('Registration successful:', response.data);

      setFormData({
        username: '',
        email: '',
        password: '',
        phone: '',
        age: '',
      });
    } catch (error) {
      console.error('Error during registration:');
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  return (
    <div className='container'>
      <div className='form-box-register'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className='input-field'>
              <i className='fa-solid fa-user'></i>
              <input
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
              />
            </div>

            <div className='input-field'>
              <i className='fa-solid fa-envelope'></i>
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className='input-field'>
              <i className='fa-solid fa-lock'></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </div>

            <div className='input-field'>
              <i className='fa-solid fa-phone'></i>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="phone"
              />
            </div>

            <div className='input-field'>
              <i className='fa-solid fa-calendar'></i>
              <input
                type="text"
                placeholder="Age"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleChange}
                autoComplete="age"
              />
            </div>

            <div className='btn-field'>
              <button type="submit">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
