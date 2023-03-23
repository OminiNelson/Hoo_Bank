import React from 'react'

const Button = ({ styles }) => {
  return (
    <button
    type='button'
    className={`py-4 px-6 rounded-[6px] bg-blue-gradient font-poppins font-medium outline-none text-[18px] text-primary ${styles}`}
    >
      Get Started
    </button>
  )
}

export default Button