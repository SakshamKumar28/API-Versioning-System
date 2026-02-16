import React from 'react';

const Input = ({ label, name, value, onChange, placeholder, type = 'text', required = false }) => {
  return (
    <div className="mb-4">
      <label className="block text-dark-green dark:text-cream font-semibold mb-2" htmlFor={name}>
        {label} {required && <span className="text-terracotta">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-lg border-2 border-dark-green/20 dark:border-cream/20 bg-white/50 dark:bg-black/20 text-dark-green dark:text-cream focus:border-terracotta dark:focus:border-terracotta focus:outline-none transition-colors placeholder-dark-green/40 dark:placeholder-cream/40"
      />
    </div>
  );
};

export default Input;
