import React from 'react'

interface CardProps {
    children: React.ReactNode
    styles?: string
}

const Card: React.FC<CardProps> = ({children, styles}) => {
  return (
    <div className={`p-4 bg-white rounded-xl shadow-xl ${styles}`}>
        {children}
    </div>
  )
}

export default Card