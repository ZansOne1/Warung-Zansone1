import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className='footer'>
                    <ul>
                        <li> <i class="fa-brands fa-instagram-square"></i> @zans_one1</li>
                        <li> <i class="fa-brands fa-facebook" /> Fauzan Ramdani Ferdiansyah</li>
                        <li> <i class="fa-solid fa-envelope-open-text"></i> ramdani2ferdiansyah@gmail.com</li>
                    </ul>
                    <b className='copyright'> &#9400; 2022 - Zans One1 </b>
                </div>
            </div>
        );
    }
}

export default Footer;