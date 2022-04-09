/** @jsx jsx */
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import { jsx, Box, Container, Flex, Heading, Text, Input, Button, Label } from 'theme-ui';
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-scroll/modules';

export default function getstarted() {
  return (
    <Container sx={styles.container}>
        <Flex sx={styles.header}>
            <Logo src={LogoDark} width="300px"/>
            <Heading as="h4" sx={styles.header.sub}>Sign up for a startup account and get full featured integration for your projects</Heading>
        </Flex>

        <Flex sx={styles.formWrapper}>
            <Flex sx={styles.google}>
                <FcGoogle />
                <Text as='p' sx={styles.google.text}>Sign up with Google</Text>
            </Flex>
            <Flex sx={{justifyContent: 'center', alignItems: "center", marginTop: '30px', marginBottom: '30px'}}>
                <div style={{height: '1px', background: '#cccc', width: '200px', marginRight: '10px'}}/>
                <Text as="p" sx={{color: '#333'}}>or</Text> 
                <div style={{height: '1px', background: '#cccc', width: '200px', marginLeft: '10px'}}/>
            </Flex>
            <Box as="form" sx={styles.form}>
                <Flex sx={styles.form.formGroup}>
                    <Box sx={styles.form.formGroup.formField} className="mr-5">
                        <Label htmlFor="firstname" as='p'>First Name</Label>
                        <Input type="text" name="firstname" id="firstname" sx={{border: '1px solid #ccc'}}/>
                    </Box>
                    <Box sx={styles.form.formGroup.formField}>
                        <Label htmlFor="lastname" as='p'>Last Name</Label>
                        <Input type="text" name="lastname" id="lastname" sx={{border: '1px solid #ccc'}}/>
                    </Box>
                </Flex>
                <Flex sx={styles.form.formGroup}>
                    <Box sx={styles.form.formGroup.formField}>
                        <Label htmlFor="email" as='p'>Email</Label>
                        <Input type="email" name="email" id="email" sx={{border: '1px solid #ccc'}}/>
                    </Box>
                    <Box sx={styles.form.formGroup.formField}>
                        <Label htmlFor="email" as='p'>Set a password</Label>
                        <Input type="password" name="email" id="email" sx={{border: '1px solid #ccc'}}/>
                    </Box>
                </Flex>
            </Box>
            <Flex sx={{marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box sx={{width: '50%', color: 'grey'}}>
                    <Text as='p'>By clicking this button, you agree to our terms of service</Text>
                </Box>
                <Box>
                    <Button variant="primary" sx={styles.formBtn}>Create a free account</Button>
                </Box>
            </Flex>
        </Flex>

        <Flex sx={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text as='p'>
                Already have an account?
            </Text>
            <Link href='Log in' sx={{color: 'red', textDecoration: 'none'}}>Login</Link>
        </Flex>
    </Container>
  )
}


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'DM Sans',
        mt: 4
    },
    header: {
        flexDirection: 'column',
        fontFamily: 'DM Sans',
        justifyContent: 'center',
        alignItems: 'center',

        sub:{
            fontFamily: 'DM Sans',
            mt: 30,
            mb: 30,
            color: 'grey',
            width: '75%',
            fontWeight: 'normal'
        }
    },

    formWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    google:{
        padding: 3,
        position: 'relative',
        width: '70%',
        alignItems: 'center',

        '&:before': {
            position: 'absolute',
            content: "''",
            width: '100%',
            top: 0,
            left: 0,
            height: '100%',
            border: '1px solid rgba(38, 78, 118, 0.1)',
            borderRadius: 'inherit',
            transition: 'all 0.3s',
            zIndex: -1,
          },

          '&:hover': {
            boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
            '&:before': {
              opacity: 0,
            },
          },
        text:{
            ml: 3,
            color: 'grey'
        }
    },

    form: {
        width: '100%',

        formGroup: {
            justifyContent: 'space-between',

            formField: {
                width: '100%',
                mx: 3,
                mb: 3
            }
        }
    },
    formBtn: {
        background: '#00308F',
        padding: '1rem'
    }
}