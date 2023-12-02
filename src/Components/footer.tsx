import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { NavLink } from "react-router-dom"
import Nav from 'react-bootstrap/esm/Nav';
import { useNavigate } from 'react-router-dom';

export function Footer() {
    const navigate = useNavigate();

    const redirectToPrivacy = () => {
        navigate('/privacynpolicy');
    }

    const redirectToTerm = () => {
        navigate('/termsncondition')
    }

    const redirectToAbout = () => {
        navigate('/about')
    }

    return (
        <footer className="footer">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

            <div className="foot">

                <div className="box1">
                    <h1 className="title">Sunibpolis</h1>
                </div>

                <div className="box2">
                    <a href='#' onClick={redirectToAbout} className="ling">About</a>
                    <a href='#' onClick={redirectToPrivacy} className="ling">Privacy Policy</a>
                    <a href='#' onClick={redirectToTerm} className="ling">Terms & Conditions</a>
                </div>

                <div className="box3">
                    <ul className='sosial'>
                        <li><a href="https://twitter.com"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className="box4"><p className="description">COPYRIGHT © 2023 SUNIBPOLIS. PT KEL SE NINE. All Right Reserved.</p></div>
        </footer>
    );
}
