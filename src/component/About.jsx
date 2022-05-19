import React, { Component } from 'react';

class About extends Component {
    state = {}
    render() {
        return (
            <div className='section-3' id="about">
                <div className='content'>
                    {/* <img src="/assets/img/food.png" alt="bg-top" className='top' /> */}
                    <h1 className='about-h1'>ABOUT</h1>
                    {/* <img src="/assets/img/human.png" alt="" className='human' /> */}
                    <p className='about-content'>
                        Kupat Tahu dan Lontong Kari Arjasari adalah makanan berat yang dibuat dari bahan dasar beras, kacang, kunyit, bawang merah, bawang putih, garam, royco, dan lain-lain. Makanan ini sudah dikenal di daerah Arjasari, Banjaran, Ciparay, hingga Majalaya. Kupat Tahu dan Lontong Kari ini didirikan oleh Dapur ZANSONE1 yaitu keluarga Fauzan Ramdani Ferdiansyah sejak tahun 2016 yang bertempatkan di Pasar Arjasari (40379).
                    </p>
                    {/* <a href='#f'>Lebih Banyak</a> */}
                    {/* <img src="/assets/img/about-bg-bottom.png" alt="about-bg-bottom" className='bottom' /> */}
                </div>
            </div>
        );
    }
}

export default About;