import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css"

const Home = () => (
    <div id="homeBody" className="d-flex text-center text-white" cz-shortcut-listen="true">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        {/* <header class="mb-auto">
            <div>
            <h3 class="float-md-start mb-0">Cover</h3>
            <nav class="nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Contact</a>
            </nav>
            </div>
        </header> */}
        
        <main className="px-3" id="tittleGame">
            <h1>Welcome to the Adventure API !!</h1>
            <p className="lead">Are you ready to face monsters across hostile worlds ??</p>
            <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white" style={{color:'black'}}>Start a game</a>
            </p>
        </main>
        
        <footer className="mt-auto text-white-50">
            <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
        </footer>
        </div>
    </div>
);

export default Home;