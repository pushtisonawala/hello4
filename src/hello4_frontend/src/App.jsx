import { useState } from 'react';
import { hello4_backend } from 'declarations/hello4_backend';

function App() {
  const [years, setYears] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const randomYears = Math.floor(Math.random() * 6); // Generates a random number between 0 and 5
    setYears(`${name}, you will remain single for ${randomYears} year(s)!`);
  }

  return (
    <main style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <img src="/logo2.svg" alt="DFINITY logo" style={{ width: '150px', marginTop: '20px' }} />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label htmlFor="name" style={{ fontSize: '18px', fontWeight: 'bold' }}>
          Enter your name: &nbsp;
        </label>
        <input
          id="name"
          alt="Name"
          type="text"
          style={{
            padding: '5px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '5px 10px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Click Me!
        </button>
      </form>
      <section
        id="greeting"
        style={{
          fontSize: '20px',
          color: '#333',
          marginTop: '20px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          display: years ? 'inline-block' : 'none',
        }}
      >
        {years}
      </section>
    </main>
  );
}

export default App;