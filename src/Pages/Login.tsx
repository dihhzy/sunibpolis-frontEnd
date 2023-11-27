import React, { ChangeEvent, FormEvent, useState } from "react";
import './Login.css';
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
        <div className="main">
            <div className="bagian-form">
                <h1 className="judul">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="pertanyaan">
                        <i className='fa-solid fa-envelope'></i>
                        <label htmlFor="Email">Email</label>
                        <input type="text" id="Email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="pertanyaan">
                        <i className='fa-solid fa-lock'></i>
                        <label htmlFor="Password">Password</label>
                        <input type="text" id="Password" value={formData.password} onChange={handleInputChange} />
                    </div>
                    <div className="buttonT">
                        <button type="submit">Login</button>
                    </div>

                </form>
            </div>
        </div>
    );
}