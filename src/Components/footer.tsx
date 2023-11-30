/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="foot">

                <div className="box1">
                    <h1 className="title">Sunibpolis</h1>
                </div>

                <div className="box2">
                    <a href='#' className="ling">About</a>
                    <a href='#' className="ling">Privacy Policy</a>
                    <a href='#' className="ling">Terms & Conditions</a>
                </div>

                <div className="box3">
                    <ul className='sosial'>
                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    </ul>
                </div>

            </div>

            <div className="box4"><p className="description">COPYRIGHT © 2023 SUNIBPOLIS. PT KEL SE NINE. All Right Reserved.</p></div>
        </footer>
    );
}
