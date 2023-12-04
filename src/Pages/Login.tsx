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
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            alert("email dan password tidak boleh kosong");
            return
        }

        const response = await axios.post('https://localhost:7234/api/User/api/User/login', {
            UserEmail: formData.email,
            UserPassword: formData.password,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 200) {
            alert("Login Successful");
            localStorage.setItem("userId", response.data.userId)
<<<<<<< HEAD
            window.location.href = "/dashboard"
=======
            localStorage.setItem("userName", response.data.userName)
            window.location.href = "/"
>>>>>>> f7b0773c7541e7690e896af633df3d781ee3a938
        } else if (response.status === 401) {
            alert("Login failed: Incorect email or password.");
        } else {
            alert("Login Failed: Server error. Please try again later.");
        }

        setFormData({
            email: "",
            password: "",
        })
    }
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
                            <input type="password" placeholder="Password" id="password" name="password" value={formData.password} onChange={handleInputChange} autoComplete="current-password" />
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