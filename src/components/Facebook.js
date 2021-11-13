import React from "react";
import FacebookLogin from "react-facebook-login";

const Facebook = () => {
  const state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: "",
  };

  const responseFacebook = (response) => {
    console.log(response);
  };
  const componentClicked = () => {
    console.log("Clicked");
  };

  let fbContent = null;
  if (state.isLoggedIn) {
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
