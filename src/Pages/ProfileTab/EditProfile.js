import React from "react";
import "./EditProfile.css";

function EditProfile() {
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
        <h4> Alex Damon </h4>
        <h4> Team Leader </h4>
        <h4> Employed Since: </h4>
        <h4> 2018 </h4>
        <h3> Site Location: On-Site </h3>
        <button> Edit Site Location </button>
      </div>
    </div>
  );
}

export default EditProfile;
