import React from 'react';
import "./Footer.css";
import logo from "./logo2.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container2">
                <div className="col-md-3">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="col-md-3">
                    <div className="address">
                        <p>
                             <br />
                             No. 1, New Bangaru Naidu Colony,<br/>
                            K.K. Nagar (West), Chennai - 600078.
                        </p>
                        <p className="tel">Tel: +1 (925) 750 8475</p>
                        <p className="copyright">© 2024 MedAI. All rights reserved.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    
                    <p className="links">
                        Blogs <br />
                        Case Studies <br />
                        Articles <br />
                        Partners <br />
                        Learn About Tail
                    </p>
                </div>
                <div className="col-md-3">
                    <p className="solutions">
                        Solutions <br />
                        Strategic Spend <br />
                        Spend HyperCube <br />
                        Opportunities & Savings Pipeline <br />
                        Digital Sourcing Operations
                    </p>
                </div>
            </div>
        </footer>
    );
}