import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    // Extended English-Tagalog translation mapping
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa',
      love: 'pag-ibig',
      friend: 'kaibigan',
      food: 'pagkain',
      water: 'tubig',
      house: 'bahay',
      family: 'pamilya',
      school: 'paaralan',
      teacher: 'guro',
      student: 'mag-aaral',
      beautiful: 'maganda',
      good: 'mabuti',
      bad: 'masama',
      thank: 'salamat',
      goodbye: 'paalam',
      please: 'pakiusap',
      happy: 'masaya',
      sad: 'malungkot'
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label>English Word:</label>
        <input
          type="text"
          value={englishWord}
          onChange={(e) => setEnglishWord(e.target.value)}
        />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div>
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
  );
}

export default App;