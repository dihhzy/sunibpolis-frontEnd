import React, { ChangeEvent, FormEvent, useState } from "react";
import './RegisternLogin.css';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

interface LoginForm {
    email: string;
    password: string;
}

export function Login() {
    const [formData, setFormData] = useState<LoginForm>({
        email: "",
        password: "",
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            alert("email dan password tidak boleh kosong");
            return;
        }

        try {
            const response = await axios.post('https://localhost:7234/api/User/api/User/login', {
                email: formData.email,
                password: formData.password,
            }, {
                headers: {
                'Content-Type': 'application/json'
            }
            });

            console.log("Login berhasil");
            // If the login is successful, you can store the user's data or access token in localStorage or in a state management library like Redux
            // Then, you can redirect the user to the desired page

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        setFormData({
            email: "",
            password: "",
        });
    };
    return (
        <div className="container">
            <div className="form-box-login">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <div className="input-field">
                            <i className='fa-solid fa-envelope'></i>
                            <input type="text" placeholder="E-mail" id="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" />
                        </div>

                        <div className="input-field">
                            <i className='fa-solid fa-lock'></i>
                            <input type="text" placeholder="Password" id="password" name="password" value={formData.password} onChange={handleInputChange} autoComplete="current-password" />
                        </div>

                        <div className="btn-field">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}