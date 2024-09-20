import React from 'react';
import { Form, Formik } from 'formik';
import InputForm from '../InputForm';
import { useRouter } from 'next/router';
import TitleForm from '../TitleForm';

const LoginForm = () => {
    const router = useRouter();

    const navigateToRegister = () => {
        router.push('/register')
    }

  return (
    <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                console.log(values)
                setSubmitting(false)
            }, 400);
        }}
    >
        {({isSubmitting}) => 
            <Form>
                <TitleForm title={'Login'} />

                <div
                    className='flex flex-col mx-8 w-72 gap-4 justify-center items-center'
                >
                    <InputForm label={'Email'} name={'email'} type={'email'} />
                    <InputForm label={'Password'} name={'password'} type={'password'} />

                    <div
                        className='flex flex-col justify-between gap-2 w-full my-4'
                    >
                        <button
                            disabled={isSubmitting}
                            className='bg-blue-500 rounded w-full text-white font-bold py-1'
                        >
                            Login
                        </button>
                        <button
                            onClick={navigateToRegister}
                            className='bg-blue-700 rounded w-full text-white font-bold py-1'
                        >
                            Register
                        </button>
                    </div>
                </div>

            </Form>
        }
    </Formik>
  )
}

export default LoginForm