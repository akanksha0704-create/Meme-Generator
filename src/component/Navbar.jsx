import React from 'react';

function Navbar() {
  return (
    <div className='container-fluid nav'>
      <div className='row'>
        <div className='col-md-12 nav'>
          <nav className='navbar'>
            <a className='navbar-brand' href='#'>
              <img src='logo.png' className=' logo' alt='' />
              Meme Generator
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
