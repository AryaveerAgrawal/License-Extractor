import React from 'react';
import Nee from './Bk/Nee';  // Note: no file extension needed, and capital N

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Driving License Information Extractor</h1>
        <p>Extract information from driving license images using AI</p>
      </header>
      
      <main className="App-main">
        <Nee />
      </main>
      
      <footer className="App-footer">
        <p>&copy; 2024 DL Extractor. Powered by Gemini AI.</p>
      </footer>
    </div>
  );
}

export default App;