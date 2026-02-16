import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '' }) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer";
  
  const variants = {
    primary: "bg-terracotta text-white hover:opacity-90",
    secondary: "bg-mustard text-dark-green hover:opacity-90",
    outline: "border-2 border-dark-green text-dark-green dark:border-cream dark:text-cream hover:bg-dark-green hover:text-white dark:hover:bg-cream dark:hover:text-dark-green"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
