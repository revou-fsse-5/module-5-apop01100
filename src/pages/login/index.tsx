import React from 'react'
import Card from '@/components/Card'
import LoginForm from '@/components/LoginForm'
import dynamic from 'next/dynamic'

// const LoginForm = dynamic(() => import('@/components/LoginForm'), {
//     ssr: false,
// });

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <Card styles='text-black h-fit w-fit'>
            <LoginForm />
        </Card>
    </div>
  )
}

export default Login