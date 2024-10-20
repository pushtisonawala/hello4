import { useState } from 'react';
import { hello4_backend } from 'declarations/hello4_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    hello4_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main style={mainStyle}>
      <img src="/logo2.svg" alt="DFINITY logo" style={logoStyle} />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name" style={labelStyle}>
          Enter your name: &nbsp;
        </label>
        <input
          id="name"
          alt="Name"
          type="text"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Click Me!
        </button>
      </form>
      <section id="greeting" style={greetingStyle}>{greeting}</section>
    </main>
  );
}

// Inline CSS styles
const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f4f4f4',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};

const logoStyle = {
  width: '100px',
  marginBottom: '20px',
};

const formStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',
};

const labelStyle = {
  fontSize: '16px',
  color: '#333',
  marginBottom: '8px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '20px',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '12px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const greetingStyle = {
  marginTop: '20px',
  fontSize: '18px',
  color: '#333',
  fontWeight: 'bold',
};

export default App;
