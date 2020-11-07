import React from "react";
import "./style.css";

function WelcomeIntro(props) {
    return (
        <div className="container-fluid" id="intro-container">
            <div className="row" id="intro">
                <p className="text-center">Welcome to "Inventory Tracker", an easy to use inventory management system that allows you to excel at warehouse efficiency. Wether you run logistics in a warehouse or keeping track of coffee beans, our simple to use program allows anyone to easily manage and track their inventory. We offer a solution for anyone!</p>
            </div>
        </div>
    );
}

export default WelcomeIntro;
