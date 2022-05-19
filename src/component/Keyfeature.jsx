import React, { Component } from 'react';
import Feature from './Feature';
import '../App.css';

const featuredata = [
  {
    Food1: <img src="/assets/img/kupat.jpg" alt="kupat" />,
    Food2: <img src="/assets/img/lontong2.jpg" alt="lontong" />,
    // Product3: <img src="/assets/img/stempel.jpeg" alt="Stempel" />
  },
];

class KeyFeatures extends Component {
  state = {}
  render() {
    return (

      <div id="menu" >
        <img src="/assets/img/" alt="bg-top" className='bg-product-top' />
        <div className='section-2'>
          <div className='content'>
            <h1 className='section-2-heading'>Menu Makanan</h1>
            {featuredata.map((fitur) => (
              <Feature detailproduct={fitur} />
            ))}
            <button type='submit' className='btn'>Lebih Banyak</button>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyFeatures;