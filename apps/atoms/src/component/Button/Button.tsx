import React, { HTMLAttributes } from 'react'
import './Button.css'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  title: string
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {title}
    </button>
  )
}

export default Button
