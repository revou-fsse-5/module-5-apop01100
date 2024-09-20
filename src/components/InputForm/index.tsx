import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface InputFormProps {
    label: string
    name: string
    type: string
}

const InputForm: React.FC<InputFormProps> = ({label, name, type}) => {
  return (
    <div
        className='w-full'
    >
        <label
            htmlFor={name}
            className='block text-gray-800'
        >
            {label}
        </label>
        <Field
            id={name}
            name={name}
            type={type}
            className='w-full border border-neutral-400 rounded p-1'
        />
        <ErrorMessage 
            name={name}
            component='div'
            className='text-red-500 text-sm mt-1'
        />
    </div>
  )
}

export default InputForm