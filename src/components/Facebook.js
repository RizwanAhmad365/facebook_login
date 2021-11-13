import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const Facebook = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    setLoginStatus(true);
    setUserId(response.userId);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);
  };
  const componentClicked = () => {
    console.log("Clicked");
  };

  let fbContent = null;
  if (loginStatus) {
    fbContent = (
      <div
        style={{
          width: "400px",
          margin: "auto",
          background: "lightgray",
          padding: "20px",
        }}
      >
        <img src={picture} alt={name} />
        <h2 style={{ color: "#333" }}>Welcome {name}</h2>
        Email: {email}
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId="3137067039857675"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }
  return <div>{fbContent}</div>;
};

export default Facebook;
