import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import Footer from './Footer';
import ArticleBody from './ArticleBody';
import Ad from './Ad';
import ClickBait from './ClickBait'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />

    <main className="expanded row">
      
        <ArticleBody />
        
      <Ad />

      <ClickBait />
    </main>

      <Footer />
      </div>
    );
  }
}

export default App;
