
import React, { Component } from 'react';
import './styles.css'

class App extends Component {
  render() {
    console.log('about')
    return (
      <div className="App-container">
        <article className='application-about-article'>
          <h2>Welcome to DucOS.</h2>
          <p>DucOS is a Web Portfolio that I developed to look and feel like an actual Operating System.</p>
          <p>However, I do hope that it can become an actual Web Operating System eventually.</p>
          <p>Therefore, I will continue to integrate more  awesome features and amazing applications to DucOS.</p>
          <p>Please stay tuned for upcoming features and DucOS applications!!</p>
        </article>
      </div>
    );
  }
}

export default App;
