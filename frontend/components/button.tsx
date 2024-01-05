import React from 'react';

interface btnProps {
  className: string;
  text: React.ReactNode; 
}

const Button: React.FC<btnProps> = ({ className, text }) => {
  return (
    <div className={`py-1 px-5 rounded-full cursor-pointer ${className}`}>
      {text}
    </div>
  );
};

export default Button;