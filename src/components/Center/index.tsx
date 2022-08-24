import React from 'react';
import './Center.css';

interface CenterProps {
  children: React.ReactNode;
}

const Center = ({ children }:CenterProps) => {
  return <div className="center">{children}</div>;
};

export default Center;
