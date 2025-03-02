import React from 'react'
import Card from '../../../components/Card.jsx'
import { Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Input, Spinner, Stack, Text, useToast } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import { object, ref, string } from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { verifyForgotToken } from '../../../api/query/userQuery.js'

const resetValidationSchema = object({
    password: string().min(6, 'Password must be at least 6 characters').required("Password is required"),
    repeatPassword: string().oneOf([ref('password'), null], "Password must match").required("Repeat password is required")
})

const ResetPassword = () => {
    const navigate = useNavigate()
    const toast = useToast()
    const { token } = useParams()

    const { mutate, isLoading } = useMutation({
        mutationKey: ['verify-forgot-token'],
        mutationFn: verifyForgotToken,
        enabled: !!token,
        onError: (error) => {
            toast({
                title: 'SignUp Error',
                description: error.message,
                status: 'error',
            })
            navigate('/signup')
        },
        onSettled: () => {
            navigate('/reset-success')
        }
    })

    if (isLoading) {
        return (
            <Center h={'100vh'}>
                <Spinner />
            </Center>
        )
    }
    return (
        <Container>
            <Center minH={'100vh'}>
                <Card>
                    <Text mt={4} fontWeight={'medium'} textStyle='h1'>
                        Reset Password
                    </Text>
                    <Text textStyle='p2' mt={4} color={'black.60'}>
                        Enter your new password.
                    </Text>
                    <Formik initialValues={{
                        password: '',
                        repeatPassword: '',
                    }}
                        onSubmit={(values) => {
                            mutate({ token, password: values.password })
                        }}
                        validationSchema={resetValidationSchema}
                    >
                        {() => (
                            <Form>
                                <Stack mt={8} spacing={6}>
                                    <Field name='password'>
                                        {({ field, meta }) => (
                                            <FormControl color={'p.black'} isInvalid={meta.touched && !!meta.error}>
                                                <FormLabel htmlFor='password'>New Password</FormLabel>
                                                <Input {...field} name='password' type='password' placeholder='Enter Your password...' _placeholder={{ color: 'black.60' }} _hover={{ border: '1px', borderColor: 'blackAlpha.300' }} border={'1px'} borderColor={'blackAlpha.300'} />
                                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='repeatPassword'>
                                        {({ field, meta }) => (
                                            <FormControl color={'p.black'} isInvalid={meta.touched && !!meta.error}>
                                                <FormLabel htmlFor='repeatPassword'>New Repeat Password</FormLabel>
                                                <Input {...field} name='repeatPassword' type='password' placeholder='Enter password again...' _placeholder={{ color: 'black.60' }} _hover={{ border: '1px', borderColor: 'blackAlpha.300' }} border={'1px'} borderColor={'blackAlpha.300'} />
                                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Button w={'full'} type='submit' color={'white'} bg={'purple.500'}>
                                        Reset Password
                                    </Button>
                                </Stack>
                            </Form>)}
                    </Formik>
                </Card>
            </Center>
        </Container>

    )
}

export default ResetPassword
