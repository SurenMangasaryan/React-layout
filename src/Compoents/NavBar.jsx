import React from 'react'

export default function NavBar() {

    function setInput(e) {
        if (e.target.previousElementSibling.style.display === 'block') {
            e.target.previousElementSibling.style.display = 'none';
        } else {
            e.target.previousElementSibling.style.display = 'block';
        }
    }

    return (
        <ul className='navbar'>
            <li className='navbar-li'>Home</li>
            <li className='navbar-li'>Blog</li>
            <li className='navbar-li'>What's New</li>
            <li className='navbar-icon'>
                <input type="text" placeholder='Search...' className='serach' />
                <i className="fa fa-search" aria-hidden="true" onClick={(e) => { setInput(e) }}></i>
            </li>
        </ul>
    )
}
