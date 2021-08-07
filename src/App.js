import './App.css';
import React from 'react';
import {Header} from './components/header/Header';
import {Content} from './components/content/Content';
import {Footer} from './components/footer/Footer';

function App() {
  const emojiDataset = {
    "😀": "Grinning Face",
    "😉": "Winking Face",
    "🤗": "Hugging Face",
    "🤔": "Thinking Face",
    "😏": "Smirking Face"
  }
  
  return (
    <div className="App">
      <Header />
      <Content emojiDataset={emojiDataset} />
      <Footer />
    </div>
  );
}

export default App;
