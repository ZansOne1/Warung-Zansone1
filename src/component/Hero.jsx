import React, { Component } from 'react';
import './Hero.css';
class Hero extends Component {
    state = {}
    render() {
        return (
            <div className='hero' id="home">
                <div className='content'>
                    <h1>Kupat Tahu & Lontong Kari Arjasari</h1>
                    <ul>
                        {/* <li><img className='hero' src="/assets/img/kupat.jpg" alt="" /></li> */}
                    </ul>
                    <p>
                        Ketupat paling enak di Bandung ? ya di Warung ZANSONE1!!
                    </p>
                    <button type='button'>
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        );
    }
}

export default Hero;