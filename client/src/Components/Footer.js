import React from "react";

function Footer(){
 return (
    // <h1>Footer COMPONENT</h1>
    <footer>
    <div className="footer-row">
        <div className="footer_col">
            <h1>OasisHomes</h1>
            <p>Choose your perfect house today and start building your home</p>
        </div>
        <div className="footer_col">
            <h3>Office</h3>
            <p>Ngong Road</p>
            <p>Ngong Road Lane</p>
            <p>Nairobi,Kenya</p>
            <p className="email-id">oasishomes@listings.co.ke</p>
            <h5>+254 712 345 678</h5>
        </div>
        <div className="footer_col">
            <h3>Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Signup</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </div>
        <div className="footer_col">
            <h3>Newsletter</h3>
            <form>
                <input type="email" placeholder="Enter your email address" required></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </footer>
 )
}

export default Footer