import React from 'react';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <h1 class="title">Welcome to my React App!</h1>
       <img src='https://i.gifer.com/XfQ8.gif' class="welcomeImage"></img>
      {/* Other content of your application */}
    </div>
  );
};

export default App;