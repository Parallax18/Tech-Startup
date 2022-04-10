/** @jsx jsx */
import { jsx } from 'theme-ui';
// import {authStyles as styles } from "styles/auth.styles"
import SignUp from "./sign-up"
import { Fragment } from 'react';
import { AuthProvider } from 'contexts/AuthContext';


export default function getstarted() {
  return (
    <AuthProvider>
      <Fragment>
          <SignUp />
      </Fragment>
    </AuthProvider>
  )
}

