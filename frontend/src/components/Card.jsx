import React from 'react';

const Card = ({ children, title, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-dark-green/50 rounded-2xl shadow-xl p-8 border border-dark-green/10 dark:border-cream/10 backdrop-blur-sm ${className}`}>
      {title && <h3 className="text-2xl font-bold text-dark-green dark:text-cream mb-6">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
