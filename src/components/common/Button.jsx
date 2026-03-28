import React from 'react'

const Button = ({text, outlined}) => {
  return (
    <div className={`rounded-sm text-xs py-1 px-5 sm:text-base sm:py-1 sm:px-10 md:text-lg md:py-2 md:px-20 font-semibold transition-all duration-300
        ${outlined ? 'border border-yellow text-yellow bg-blue hover:bg-yellow hover:text-white'
        : 'bg-yellow border border-yellow text-white hover:shadow-[5px_5px_10px_rgba(255,183,3,0.5)]' }`}>
        {text}
    </div>
  )
}

export default Button