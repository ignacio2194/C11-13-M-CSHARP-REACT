import React, { useEffect } from 'react'
const GoogleBtn = () => {
  function handleCredentialResponse(response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    // const responsePayload = decodeJwtResponse(response.credential);
console.log(response)
    // console.log("ID: " + responsePayload.sub);
    // console.log('Full Name: ' + responsePayload.name);
    // console.log('Given Name: ' + responsePayload.given_name);
    // console.log('Family Name: ' + responsePayload.family_name);
    // console.log("Image URL: " + responsePayload.picture);
    // console.log("Email: " + responsePayload.email);
 }
 useEffect(()=>{
  handleCredentialResponse()
 },[])
  return (
    <div>
        <div id="g_id_onload"
     data-client_id="217294187514-iv1jg7ua0l2i79v3qe1847dqmbr00ojd.apps.googleusercontent.com"
     data-callback="handleCredentialResponse"
     data-login_uri="http://localhost:3000"
     data-your_own_param_1_to_login="any_value"
     data-your_own_param_2_to_login="any_value">
        </div>
        <div
      className="g_id_signin"
      data-type="standard"
      data-size="large"
      data-theme="outline"
      data-text="sign_in_with"
      data-shape="rectangular"
      data-logo_alignment="left"
    ></div>
    </div>
  )
}

export default GoogleBtn