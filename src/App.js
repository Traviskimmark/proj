import React from 'react';
import NavBar from './NavBar.jsx'; // Corrected import path with .jsx
import BackgroundImage from './BackgroundImage.jsx'; // Corrected import path with .jsx
import EventRating from './EventRating.jsx'; // Corrected import path with .jsx
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <BackgroundImage />
      <header>
        {/* Content for the header */}
        <h1>Your Event Planning App</h1>
      </header>
      <div className="content">
        <section>
          <h2>Find Events</h2>
          {/* Content for the "Find Events" section */}
          <p>Find different events here...</p>
        </section>
        <section>
          <h2>Create Events</h2>
          {/* Content for the "Create Events" section */}
          <p>Create your own event...</p>
        </section>
      </div>
      <EventRating />
    </div>
  );
}

export default App;
