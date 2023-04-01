import React from 'react'
import "./css/App.css";

export function Nav() {
  return (
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

        <div class="nav navbar-nav">
            <a class="nav-link active" aria-current="page" href="">Home</a>
            <a class="nav-link" href="/about">About Us</a>
        </div>
    </div>
    </nav>

  );
}
