import React, { useState } from 'react'
import Card from '../../../components/Card.jsx'
import { Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Icon, Input, Stack, Text, useToast } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import { object, string } from 'yup'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { sendForgotMail } from '../../../api/query/userQuery.js'
import { useMutation } from '@tanstack/react-query'

const forgotValidationSchema = object({
    email: string().email("Email is invalid").required('Email is required'),
})

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const toast = useToast()

    const { mutate, isSuccess, isLoading } = useMutation({
        mutationKey: ['forgot-email'],
        mutationFn: sendForgotMail,
        onSettled: (data) => {
            console.log(data)
            navigate(`/forgot-success/${email}`)
        },
        onError: (error) => {
            toast({
                title: "Forgot error",
                description: error.message,
                status: 'error',
            })
        },
    },)

    return (
        <Container>
            <Center minH={'100vh'}>
                <Card>
                    <Link to={'/signin'}>
                        <Icon as={AiOutlineArrowLeft} boxSize={6} />
                    </Link>
                    <Text mt={4} fontWeight={'medium'} textStyle='h1'>
                        Forgot Password
                    </Text>
                    <Text textStyle='p2' mt={4} color={'black.60'}>
                        Enter your email address for which account you want to reset your password.
                    </Text>
                    <Formik initialValues={{
                        email: '',
                    }}
                        onSubmit={(values) => {

                            setEmail((prev) => (prev = values.email))
                            mutate({ email: values.email })
                        }}
                        validationSchema={forgotValidationSchema}
                    >
                        {() => (
                            <Form>
                                <Stack mt={8} spacing={6}>
                                    <Field name='email'>
                                        {({ field, meta }) => (
                                            <FormControl color={'p.black'} isInvalid={meta.touched && !!meta.error}>
                                                <FormLabel htmlFor='email'>Email</FormLabel>
                                                <Input {...field} name='email' type='email' placeholder='Enter Your email...' _placeholder={{ color: 'black.60' }} _hover={{ border: '1px', borderColor: 'blackAlpha.300' }} border={'1px'} borderColor={'blackAlpha.300'} />
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

export default ForgotPassword
