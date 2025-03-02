import { Button, Center, Checkbox, Container, Flex, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { object, string, ref } from 'yup'
import Card from '../../../components/Card'
import { useMutation } from '@tanstack/react-query'
import { signupUser } from '../../../api/query/userQuery'

const signupValidationSchema = object({
    name: string().required('Name is required'),
    surname: string().required("Surname is required"),
    email: string().email("Email is invalid").required('Email is required'),
    password: string().min(6, 'Password must be at least 6 characters').required("Password is required"),
    repeatPassword: string().oneOf([ref('password'), null], "Password must match").required("Repeat password is required")
})


const Signup = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const toast = useToast()

    const { mutate, isLoading } = useMutation({
        mutationKey: ['signup'],
        mutationFn: signupUser,
        onSuccess: (data) => {
            console.log(email)
            if(email !== "") {
                navigate(`/register-email-verify/${email}`)
            }
        },
        onError: (error) => {
            toast({
                title: "SignUp error",
                description: error.message,
                status: 'error',
            })
        }
    },)

    return (
        <Container>
            <Center minH={'100vh'}>
                <Card>
                    <Text fontWeight={'medium'} textStyle='h1'>Welcome to Crypto App</Text>
                    <Text textStyle='p2' mt={4} color={'black.60'}>Create a free account by filling data below.</Text>
                    <Formik initialValues={{
                        name: '',
                        surname: '',
                        email: '',
                        password: '',
                        repeatPassword: '',
                    }}
                        onSubmit={(values) => {
                            setEmail(values.email)
                            
                            mutate({
                                firstName: values.name,
                                lastName: values.surname,
                                email: values.email,
                                password: values.password,
                            })
                        }}
                        validationSchema={signupValidationSchema}
                    >
                        {() => (
                            <Form>
                                <Stack mt={10} spacing={6}>
                                    <Flex gap={4}>
                                        <Field name='name'>
                                            {({ field, meta }) => (
                                                <FormControl color={'p.black'} isInvalid={meta.touched && !!meta.error}>
                                                    <FormLabel htmlFor='name'>Name</FormLabel>
                                                    <Input {...field} name='name' placeholder='Enter your name...' _placeholder={{ color: 'black.60' }} _hover={{ border: '1px', borderColor: 'blackAlpha.300' }} border={'1px'} borderColor={'blackAlpha.300'} />
                                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name='surname'>
                                            {({ field, meta }) => (
                                                <FormControl color={'p.black'} isInvalid={meta.touched && !!meta.error}>
                                                    <FormLabel htmlFor='surname'>Surname</FormLabel>
                                                    <Input {...field} name='surname' placeholder='Enter your surname...' _placeholder={{ color: 'black.60' }} _hover={{ border: '1px', borderColor: 'blackAlpha.300' }} border={'1px'} borderColor={'blackAlpha.300'} />
                                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Flex>
                                    <Field name='email'>
                                        {({ field, meta }) => (
                                            <FormControl color={'p.black'} isInvalid={meta.touched && !!meta.error}>
                                                <FormLabel htmlFor='email'>Email</FormLabel>
                                                <Input {...field} name='email' type='email' placeholder='Enter Your email...' _placeholder={{ color: 'black.60' }} _hover={{ border: '1px', borderColor: 'blackAlpha.300' }} border={'1px'} borderColor={'blackAlpha.300'} />
                                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='password'>
                                        {({ field, meta }) => (
                                            <FormControl color={'p.black'} isInvalid={meta.touched && !!meta.error}>
                                                <FormLabel htmlFor='password'>Password</FormLabel>
                                                <Input {...field} name='password' type='password' placeholder='Enter Your password...' _placeholder={{ color: 'black.60' }} _hover={{ border: '1px', borderColor: 'blackAlpha.300' }} border={'1px'} borderColor={'blackAlpha.300'} />
                                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='repeatPassword'>
                                        {({ field, meta }) => (
                                            <FormControl color={'p.black'} isInvalid={meta.touched && !!meta.error}>
                                                <FormLabel htmlFor='repeatPassword'>Repeat Password</FormLabel>
                                                <Input {...field} name='repeatPassword' type='password' placeholder='Enter password again...' _placeholder={{ color: 'black.60' }} _hover={{ border: '1px', borderColor: 'blackAlpha.300' }} border={'1px'} borderColor={'blackAlpha.300'} />
                                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Checkbox color={'black'}>
                                        <Text textStyle={'p3'}>
                                            I agree with {" "}
                                            <Text as={'span'} color={'p.purple'}>Terms and Conditions</Text>
                                        </Text>
                                    </Checkbox>
                                    <Button isLoading={isLoading} type='submit' color={'white'} bg={'purple.500'}>Create Account</Button>
                                    <Text textStyle={'p3'} color={'black.60'} textAlign={'center'}>
                                        Already have an account? {' '}
                                        <Link to={'/signin'}>
                                            <Text as={'span'} color={'p.purple'}>Log In</Text>
                                        </Link>
                                    </Text>
                                </Stack>
                            </Form>)}
                    </Formik>
                </Card>
            </Center>
        </Container>
    )
}

export default Signup
