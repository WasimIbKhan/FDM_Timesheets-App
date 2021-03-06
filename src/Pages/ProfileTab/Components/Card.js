import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Card.css";

function Card({ name, about, job }) {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029-1024x683.jpg"
            alt=" "
            height="100px"
            width="100px"
            class="cropped-image"
          />
        </div>
      </div>
      <div className="lower-container">
        <h3> Alex Damon </h3>
        <h4> Team Leader </h4>
        <h4> Employed Since: </h4>
        <h4> 2018 </h4>
        <h4> Currently: On-Site </h4>
        <Link to="edit-profile">
          <button>Edit Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
