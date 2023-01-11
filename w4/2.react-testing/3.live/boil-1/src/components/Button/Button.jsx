import React from 'react'


const Button = ({ label,onClick }) => {
  return <div data-testid="button" onClick={onClick}>
    
    {label}
  
  </div>
}

export default Button;
