import React, { ChangeEvent, FormEvent, useState } from "react";
import './RegisternLogin.css';
import '@fortawesome/fontawesome-free/css/all.css';


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
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            alert("email dan password tidak boleh kosong");
            return;
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
                        <input type="text" placeholder="E-mail" id="Email" value={formData.email} onChange={handleInputChange} />
                    </div>

                    <div className="input-field">
                        <i className='fa-solid fa-lock'></i>
                        <input type="text" placeholder="Password" id="Password" value={formData.password} onChange={handleInputChange} />
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