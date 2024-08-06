import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '300px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
