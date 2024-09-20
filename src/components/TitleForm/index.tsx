import React from 'react'

interface TitleFormProps {
    title: string
}

const TitleForm: React.FC<TitleFormProps> = ({title}) => {
  return (
    <div
        className='flex flex-row justify-center my-3'
    >
        <legend
            className='font-bold text-2xl'
        >
            {title}
        </legend>
    </div>
  )
}

export default TitleForm