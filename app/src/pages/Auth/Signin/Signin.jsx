import { Box, Button, Center, Checkbox, Container, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, Stack, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { object, string, ref } from 'yup'
import Card from '../../../components/Card'
import { useMutation } from '@tanstack/react-query'
import { signinUser } from '../../../api/query/userQuery'
import useAuth from '../../../hooks/useAuth'

const signinValidationSchema = object({
    email: string().email("Email is invalid").required('Email is required'),
    password: string().min(6, 'Password must be at least 6 characters').required("Password is required"),
})


const Signin = () => {
    const toast = useToast()
    const { login } = useAuth()

    const { mutate, isLoading } = useMutation({
        mutationKey: ['signin'],
        mutationFn: signinUser,
        onSuccess: (data) => {
            const { token } = data
            if (token) {
                login(token)
            }
        },
        onError: (error) => {
            toast({
                title: "Signin error",
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
                    <Text textStyle='p2' mt={4} color={'black.60'}>Enter your credentials to access the account.</Text>
                    <Formik initialValues={{
                        email: '',
                        password: '',
                    }}
                        onSubmit={(values) => {
                            mutate(values)
                        }}
                        validationSchema={signinValidationSchema}
                    >
                        {() => (
                            <Form>
                                <Stack mt={10} spacing={6}>
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
                                    <HStack justify={'space-between'}>
                                        <Checkbox color={'black'}>
                                            <Text textStyle={'p3'}>
                                                Remember me
                                            </Text>
                                        </Checkbox>
                                        <Link to={'/forgot-password'}>
                                            <Text textStyle={'p3'} as={'span'} color={'purple.500'}>forgot password?</Text>
                                        </Link>
                                    </HStack>
                                    <Box>
                                        <Button isLoading={isLoading} w={'full'} type='submit' color={'white'} bg={'purple.500'}>Login</Button>
                                        <Link to={'/signup'}>
                                            <Button variant={'outline'} width={'full'} mt={3} color={'blackAlpha.600'}>Create New Account</Button>
                                        </Link>
                                    </Box>
                                </Stack>
                            </Form>)}
                    </Formik>
                </Card>
            </Center>
        </Container>
    )
}

export default Signin
