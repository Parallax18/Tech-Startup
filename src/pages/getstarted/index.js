/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import {authStyles as styles } from "styles/auth.styles"
import SignUp from "./sign-up"
import Login from "./login"


export default function getstarted() {
  return (
    <Container sx={styles.container}>
        <SignUp styles={styles}/>
    </Container>
  )
}

