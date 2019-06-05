import React from 'react'

import './styles/appStyles.scss'

import Header from './Header/Header'
import Nba from './Nba/Nba'
import Concept from './Concept/Concept'
import Photos from './Photos/Photos'
import News from './News/News'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Nba />
      <Concept />
      <Photos />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
