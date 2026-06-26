import React from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-[12px] shadow-sm border border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' }) {
  const baseStyle = "inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-700 shadow-sm",
    secondary: "bg-secondary text-white hover:bg-[#1f8c81] focus:ring-secondary shadow-sm",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-700 shadow-sm",
    danger: "bg-danger text-white hover:bg-red-700 focus:ring-danger shadow-sm",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-500"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Input({ className = '', label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input 
        className={`w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700 transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}

export function Select({ className = '', label, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string }) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <select 
        className={`w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700 transition-colors bg-white ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

export function Badge({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'success' | 'warning' | 'danger' | 'gray' }) {
  const variants = {
    primary: "bg-primary-50 text-primary-700",
    success: "bg-success-50 text-success",
    warning: "bg-warning-50 text-warning",
    danger: "bg-danger-50 text-danger",
    gray: "bg-gray-100 text-gray-600"
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
