import React from 'react'

type FormButtonProps = {
  children: React.ReactNode
}

export const FormButton = ({ children }: FormButtonProps) => {
  return (
    <button className="bg-blue-500 text-white rounded-lg p-4">
      {children}
    </button>
  )
}
