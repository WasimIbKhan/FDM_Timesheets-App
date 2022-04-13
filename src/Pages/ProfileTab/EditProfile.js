import React from "react";
import "./EditProfile.css";

function EditProfile() {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://www.biography.com/.image/t_share/MTY2ODIwNDI5NjA2OTU0OTg1/aristotle--getty.jpg"
            alt=" "
            height="100px"
            width="100px"
            class="cropped-image"
          />
        </div>
      </div>
      <div className="lower-container">
        <h3>  </h3>
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
