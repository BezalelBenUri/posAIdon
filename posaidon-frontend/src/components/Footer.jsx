import React from 'react';

function Footer() {
  return (
    <footer className = "footer">
        <div className = "footer__addr">
            <h1 clasName = "footer__logo">Something</h1>
            <h2>Contact</h2>
            <address>
                No 7 Hospital Road QIT
                <a className = "footer__btn" href = "mailto:diamondinyang@gmail.com"> Email Us</a>
            </address>
        </div>

        <ul className = "footer__nav">
            <li className = "nav__item">
                <h2 clasName = "nav__title">Focal Points</h2>
                <ul className = "nav__ul">
                    <li>
                        <a href = "#">Surveying and Geoinformatics</a>
                    </li>
                    <li>
                        <a href = "#">Aritificial Intelligence</a>
                    </li>
                    <li>
                        <a href = "#">Software Engineering</a>
                    </li>
                </ul>
            </li>

            <li clasName = "nav__item nav__item--extra">
                <h2 className = "nav__title">Technology</h2>
                <ul clasName = "nav__ul nav__ul--extra">
                    <li>
                        <a href  = "#">Geospatial Intelligence and Solutions</a>
                    </li>
                    <li>
                        <a href  = "#">Bathymetry Surveying</a>
                    </li>
                    <li>
                        <a href  = "#">Photogrammetry / Remote sensing</a>
                    </li>
                    <li>
                        <a href  = "#">Machine / Deep Learning</a>
                    </li>
                </ul>
            </li>

            <li className = "nav__items">
                <h2 className = "nav__title">Legal</h2>
                <ul className = "nav_ul">
                    <li>
                        <a href = "#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href = "#">Terms of Use</a>
                    </li>
                    <li>
                        <a href = "#">Sitemap</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div className = "legal">
            <p>&copy; {new Date().getFullYear()} rAIn Corp. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;