import Card from '@/components/Card'
import RegisterForm from '@/components/RegisterForm'
import React from 'react'

const Register = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Card styles={'text-black h-fit w-fit'}>
        <RegisterForm />
      </Card>
    </div>
  )
}

export default Register