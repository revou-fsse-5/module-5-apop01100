import React from 'react'
import Card from '../Card'
import InputForm from '../InputForm'
import { Form, Formik } from 'formik';
import TitleForm from '../TitleForm';

const RegisterForm = () => {
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
          <TitleForm title={'Register'} />
          <div
              className='flex flex-col mx-8 w-72 gap-4 justify-center items-center'
          >
            <InputForm label='Name' name='name' type='text' />
            <InputForm label='Email' name='email' type='email' />
            <InputForm label='Password' name='password' type='password' />
            <InputForm label='Repeat your password' name='password2' type='password' />

            <div
              className='flex flex-col justify-between gap-2 w-full my-4'
            >
              <button
                  disabled={isSubmitting}
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

export default RegisterForm