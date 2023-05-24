import React from "react";
const Navbar=()=> {
    return(
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand">Start Bootstrap</a>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar