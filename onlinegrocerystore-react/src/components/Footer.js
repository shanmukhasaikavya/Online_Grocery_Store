import React from 'react';

const Footer = ({className}) => {    
        return (
          <p className={`text-center ${className}`}>
            {'Copyright © '}
              Online Grocery Store{' '}
            
            {new Date().getFullYear()}
            {'.'}
          </p>
        );
        }
export default Footer;
