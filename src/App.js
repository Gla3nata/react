import React from 'react';
import './App.css';

const App = () =>{
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='../image/logo.png' alt='logo' ></img>
      </header>
      <nav className='nav'>
        <ul>
          <li> <a>  Profile </a></li>
          <li> <a>  Messages </a> </li>
          <li> <a>  News</a> </li>
          <li><a>  Music</a></li>
        </ul>
      </nav>
      {/* <div className='content'>
         <div className='image-status'><img src=""></img></div>
         <div className='ava'>ava+descr</div>
         <div className='post'>my post<div>
      </div> */}
    </div>)
}

export default App;