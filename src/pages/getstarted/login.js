import React from 'react'
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import { Container, Box, Flex, Heading, Text, Input, Button, Label } from 'theme-ui';
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link';
import {authStyles as styles } from "styles/auth.styles"

export default function Login() {
  return (
    <Container sx={styles.container}>
        <Flex sx={styles.header}>
            <Logo src={LogoDark} width="300px"/>
            <Heading as="h4" sx={styles.header.sub}>Sign up for a startup account and get full featured integration for your projects</Heading>
        </Flex>

        <Flex sx={styles.formWrapper}>
            <Flex sx={styles.google}>
                <FcGoogle size={32}/>
                <Text as='p' sx={styles.google.text}>Sign up with Google</Text>
            </Flex>
            <Flex sx={{justifyContent: 'center', alignItems: "center", marginTop: '30px', marginBottom: '30px'}}>
                <div style={{height: '1px', background: '#cccc', width: '200px', marginRight: '10px'}}/>
                <Text as="p" sx={{color: '#333'}}>or</Text> 
                <div style={{height: '1px', background: '#cccc', width: '200px', marginLeft: '10px'}}/>
            </Flex>
            <Box as="form" sx={styles.form}>
                
                <Box sx={styles.form.formGroup}>
                    <Box sx={styles.form.formGroup.formField}>
                        <Label htmlFor="email" as='p'>Email</Label>
                        <Input type="email" name="email" id="email" sx={{border: '1px solid #ccc'}}/>
                    </Box>
                    <Box sx={styles.form.formGroup.formField}>
                        <Label htmlFor="email" as='p'>Set a password</Label>
                        <Input type="password" name="email" id="email" sx={{border: '1px solid #ccc'}}/>
                    </Box>
                </Box>
            </Box>
            <Flex sx={{marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <Box sx={{color: 'grey'}}>
                    <Text as='p'>Forgot password</Text>
                </Box>
                <Box>
                    <Button variant="primary" sx={styles.formBtn}>Log in</Button>
                </Box>
            </Flex>
        </Flex>

        <Flex sx={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text as='p'>
                Don't have an account?
            </Text>
            <Link href='/getstarted' style={{color: 'red', textDecoration: 'none'}}>Signup</Link>
        </Flex>
    </Container>
  )
}
