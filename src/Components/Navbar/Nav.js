import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        
              <div className='navbar'>
            <div className='nav-lift'>
            <div className='n-name'>Nazmul</div>
            <span>toggole</span>
            </div>

            <div className='nav-right'>
                 <div className='n-list'>
                     <ul style={{listStyleType:'none'}}>
                         <li>Home</li>
                         <li>Services</li>
                         <li>Experience</li>
                         <li>Protfolio</li>
                         <li>Testtmonilas</li>
                     </ul>
                 </div>
                 <button className='btn n-btn'>
                     Contract us
                 </button>
            </div>
        </div>
      
    );
};

export default Nav;