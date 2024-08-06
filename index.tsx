import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to My React App</h1>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      <Card title="Card Title" content="This is a simple card with a title and content." />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
