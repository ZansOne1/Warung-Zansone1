import React, { Component } from 'react';

class Hero extends Component {
    state = {}
    render() {
        return (
            <navbar className='navbar fixed-top'>
                <div className='hero2'>
                    <div className='navbar'>
                        <a><img className='App-logo' src="/assets/img/zans1.jpg" alt="Logo" /></a>
                        <ul>
                            <li><a href='#home'> HOME </a></li>
                            <li><a href='#about'> ABOUT</a></li>
                            <li><a href='#menu'>MENU MAKANAN</a></li>
                            <li><a href='#contact'>CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
            </navbar>
        );
    }
}

export default Hero;