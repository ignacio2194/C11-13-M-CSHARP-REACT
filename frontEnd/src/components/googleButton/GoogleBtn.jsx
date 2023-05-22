import { Box } from '@mui/material'
import React from 'react'

const GoogleBtn = () => {
const clientID ='226311912125-tpmbf5oplf7hbop4j78rvpj04tl7mjoe.apps.googleusercontent.com'
const URL ='http://localhost:3000'
  return (
    <Box>
      <Box>
      <Box
      id="g_id_onload"
      data-client_id={clientID}
      data-context="signin"
      data-ux_mode="popup"
      data-login_uri={URL}
      data-auto_prompt="false"
      style={{height:100}}
    ></Box>

    <Box
      className="g_id_signin"
      data-type="standard"
      data-shape="rectangular"
      data-theme="outline"
      data-text="signin_with"
      data-size="large"
      data-locale="es-419"
      data-logo_alignment="left"
    ></Box>
      </Box>

  </Box>
  )
}

export default GoogleBtn