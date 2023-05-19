import React from 'react'

const GoogleBtn = () => {
  return (
    <div>
        <div id="g_id_onload"
     data-client_id="217294187514-iv1jg7ua0l2i79v3qe1847dqmbr00ojd.apps.googleusercontent.com"
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