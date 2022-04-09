/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import {authStyles as styles } from "components/auth-forms/auth.styles"
import SignUp from "components/auth-forms/sign-up"
import Login from "components/auth-forms/login"


export default function getstarted() {
  return (
    <Container sx={styles.container}>
        <SignUp styles={styles}/>
        {/* <Login styles={styles}/> */}
    </Container>
  )
}

